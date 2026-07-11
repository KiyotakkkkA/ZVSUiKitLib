"use client";
import { Button, Modal } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";
export function ModalPreview() {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button onClick={() => setOpen(true)}>Open modal</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Modal.Header>Project settings</Modal.Header>
                <Modal.Content>Modal body content.</Modal.Content>
                <Modal.Footer>
                    <Button onClick={() => setOpen(false)}>Close</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
