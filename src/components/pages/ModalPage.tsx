import React, { useRef } from "react";

import Modal from "../modal/Modal";
import { MainButton } from "../../stylesheets/button";

export default function ModalPage() {
    const modalRef = useRef<HTMLDialogElement>(null);
    return (
        <>
            <MainButton>Open modal</MainButton>
            <Modal title="Modal #1" ref={modalRef} />
        </>
    );
}
