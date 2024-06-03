import React, { useRef } from "react";

import Modal from "../modal/Modal";
import { MainButton } from "../../stylesheets/button";

export default function ModalPage() {
    const modalRef = useRef<HTMLDialogElement>(null);

    const clickHandler = () => {
        if (modalRef.current) {
            if (modalRef.current.open) {
                modalRef.current.close();
            } else {
                modalRef.current.showModal();
            }
        }
    };

    return (
        <>
            <MainButton onClick={clickHandler}>Open modal</MainButton>
            <Modal title="Modal #1" ref={modalRef} onClick={clickHandler} />
        </>
    );
}
