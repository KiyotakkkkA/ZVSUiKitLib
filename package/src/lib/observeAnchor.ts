export function observeAnchor(
    trigger: HTMLElement,
    content: HTMLElement,
    update: () => void,
) {
    let frame = 0;
    let previous = "";
    const measure = () => {
        const rect = trigger.getBoundingClientRect();
        const geometry = `${rect.left},${rect.top},${rect.width},${rect.height},${content.offsetWidth},${content.offsetHeight}`;
        if (geometry === previous) return;
        previous = geometry;
        update();
    };
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
        measure();
        frame = requestAnimationFrame(tick);
    };
    const resizeObserver =
        typeof ResizeObserver === "undefined"
            ? null
            : new ResizeObserver(measure);
    resizeObserver?.observe(trigger);
    resizeObserver?.observe(content);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    tick();
    return () => {
        cancelAnimationFrame(frame);
        resizeObserver?.disconnect();
        window.removeEventListener("resize", measure);
        window.removeEventListener("scroll", measure, true);
    };
}
