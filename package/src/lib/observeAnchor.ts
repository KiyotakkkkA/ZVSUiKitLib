export function observeAnchor(
    trigger: HTMLElement,
    content: HTMLElement,
    update: () => void,
) {
    let frame = 0;
    let previous = "";
    const tick = () => {
        if (content.getAttribute("popover") === "manual") {
            let ancestor = trigger.closest<HTMLElement>("[popover], dialog");
            let hidden = trigger.getClientRects().length === 0;
            while (ancestor) {
                if (
                    ancestor.hasAttribute("popover")
                        ? !ancestor.matches(":popover-open")
                        : !ancestor.hasAttribute("open")
                )
                    hidden = true;
                ancestor =
                    ancestor.parentElement?.closest<HTMLElement>(
                        "[popover], dialog",
                    ) ?? null;
            }
            if (hidden) {
                if (content.matches(":popover-open")) content.hidePopover();
                previous = "";
                frame = requestAnimationFrame(tick);
                return;
            }
            if (!content.matches(":popover-open")) content.showPopover();
        }
        const rect = trigger.getBoundingClientRect();
        const geometry = `${rect.left},${rect.top},${rect.width},${rect.height},${content.offsetWidth},${content.offsetHeight}`;
        if (geometry !== previous) {
            previous = geometry;
            update();
        }
        frame = requestAnimationFrame(tick);
    };
    const resizeObserver =
        typeof ResizeObserver === "undefined"
            ? null
            : new ResizeObserver(update);
    resizeObserver?.observe(trigger);
    resizeObserver?.observe(content);
    window.addEventListener("resize", update);
    window.addEventListener("scroll", update, true);
    tick();
    return () => {
        cancelAnimationFrame(frame);
        resizeObserver?.disconnect();
        window.removeEventListener("resize", update);
        window.removeEventListener("scroll", update, true);
    };
}
