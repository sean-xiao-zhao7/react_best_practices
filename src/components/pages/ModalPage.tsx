import React, { useRef } from "react";

import Modal from "../modal/Modal";
import { MainButton } from "../../stylesheets/button";
import { ModalHandleType } from "../../types/modalHandleType";

export default function ModalPage() {
    const modalRef = useRef<ModalHandleType>(null);

    const clickHandler = () => {
        if (modalRef.current) {
            if (!modalRef.current.isOpen()) {
                modalRef.current.open();
            } else {
                modalRef.current.close();
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
