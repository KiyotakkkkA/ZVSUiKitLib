"use client";
import { Modal, Button } from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoModal() {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Button onClick={() => setOpen(true)}>Открыть</Button>

            <Modal open={open} onClose={() => setOpen(false)}>
                <Modal.Header>Подтверждение</Modal.Header>

                <Modal.Content>
                    Вы уверены, что хотите продолжить?
                </Modal.Content>

                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpen(false)}>
                        Отмена
                    </Button>
                    <Button onClick={() => setOpen(false)}>Подтвердить</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
