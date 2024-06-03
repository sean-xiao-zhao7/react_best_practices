import React, { ForwardedRef, forwardRef } from "react";

const Modal = forwardRef(function (
    { title }: { title: string },
    ref: ForwardedRef<HTMLDialogElement>
) {
    return (
        <>
            <dialog ref={ref}>
                <h2>Modal {title}</h2>
                <p>Modal body.</p>
            </dialog>
        </>
    );
});

export default Modal;
