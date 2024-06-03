import React, {
    ForwardedRef,
    forwardRef,
    useImperativeHandle,
    useRef,
} from "react";

import { ModalHandleType } from "../../types/modalHandleType";

type Props = { title: string; onClick: () => void };

const Modal = forwardRef<ModalHandleType, Props>(({ title, onClick }, ref) => {
    const dialogRef = useRef<HTMLDialogElement>(null);

    useImperativeHandle<{}, ModalHandleType>(ref, () => {
        return {
            open() {
                dialogRef.current?.showModal();
            },
            close() {
                dialogRef.current?.close();
            },
            isOpen() {
                return dialogRef.current ? dialogRef.current.open : false;
            },
        };
    });

    return (
        <>
            <dialog ref={dialogRef} onClick={onClick}>
                <h2>Modal {title}</h2>
                <p>Modal body.</p>
            </dialog>
        </>
    );
});

export default Modal;
