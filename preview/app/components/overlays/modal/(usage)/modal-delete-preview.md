```tsx
"use client";
import {
    Alert,
    Button,
    Icon,
    InputSmall,
    Modal,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

const PROJECT = "atlas-crm";

export function DemoModalDelete() {
    const [open, setOpen] = useState(false);
    const [confirmation, setConfirmation] = useState("");

    const close = () => {
        setOpen(false);
        setConfirmation("");
    };

    return (
        <>
            <Button variant="danger" onClick={() => setOpen(true)}>
                <Icon icon="trash-can-outline" />
                Delete project
            </Button>
            <Modal open={open} onClose={close} className="max-w-md">
                <Modal.Header>Delete project</Modal.Header>
                <Modal.Content className="space-y-4">
                    <Alert variant="danger">
                        This permanently deletes {PROJECT}, its 3
                        environments and all deployment history.
                    </Alert>
                    <label className="block space-y-1.5">
                        <span className="text-xs text-main-400">
                            Type <b className="text-main-100">{PROJECT}</b> to
                            confirm
                        </span>
                        <InputSmall
                            value={confirmation}
                            onChange={(event) =>
                                setConfirmation(event.target.value)
                            }
                            placeholder={PROJECT}
                        />
                    </label>
                </Modal.Content>
                <Modal.Footer>
                    <Button variant="secondary" onClick={close}>
                        Cancel
                    </Button>
                    <Button
                        variant="danger"
                        disabled={confirmation !== PROJECT}
                        onClick={close}
                    >
                        Delete forever
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
```
