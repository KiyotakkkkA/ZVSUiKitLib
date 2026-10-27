"use client";
import {
    Button,
    Icon,
    InputSmall,
    Modal,
    Switcher,
} from "@kiyotakkkka/zvs-uikit-lib";
import { useState } from "react";

export function DemoModalInvite() {
    const [open, setOpen] = useState(false);
    const [email, setEmail] = useState("");
    const [role, setRole] = useState("member");
    const [sent, setSent] = useState<string[]>([]);

    const isValid = /^\S+@\S+\.\S+$/.test(email);

    return (
        <div className="space-y-3">
            <Button onClick={() => setOpen(true)}>
                <Icon icon="email-outline" />
                Invite teammate
            </Button>
            {sent.length > 0 && (
                <p className="font-mono text-xs text-main-500">
                    Invited: {sent.join(", ")}
                </p>
            )}
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                className="max-w-md"
            >
                <Modal.Header>Invite to Atlas CRM</Modal.Header>
                <form
                    id="invite-form"
                    onSubmit={(event) => {
                        event.preventDefault();
                        if (!isValid) return;
                        setSent((current) => [...current, `${email} (${role})`]);
                        setEmail("");
                        setOpen(false);
                    }}
                >
                    <Modal.Content className="space-y-4">
                        <label className="block space-y-1.5">
                            <span className="text-xs text-main-400">Email</span>
                            <InputSmall
                                preset="email"
                                value={email}
                                onChange={(event) =>
                                    setEmail(event.target.value)
                                }
                                placeholder="teammate@company.com"
                                autoFocus
                            />
                        </label>
                        <div className="space-y-1.5">
                            <span className="text-xs text-main-400">Role</span>
                            <Switcher.Root
                                model={role}
                                onModelChange={setRole}
                                label="Role"
                                className="w-full"
                            >
                                <Switcher.Option value="viewer" className="flex-1">
                                    Viewer
                                </Switcher.Option>
                                <Switcher.Option value="member" className="flex-1">
                                    Member
                                </Switcher.Option>
                                <Switcher.Option value="admin" className="flex-1">
                                    Admin
                                </Switcher.Option>
                            </Switcher.Root>
                        </div>
                    </Modal.Content>
                </form>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setOpen(false)}>
                        Cancel
                    </Button>
                    <Button type="submit" form="invite-form" disabled={!isValid}>
                        Send invite
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}
