import React from "react";
import { createContext, useContext, useState } from "react";

import AccordionItem from "./AccordionItem";
import { AccordionContextType } from "../../types/accordionContextType";

const AccordionContext = createContext<AccordionContextType>({
    openItemId: "",
    openItem: () => {},
    closeItems: () => {},
});

export function useAccordionContext() {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error("No accordion context initialized.");
    }

    return context;
}

const Accordion = ({ children, className }) => {
    const [openItemId, setOpenItemId] = useState("");

    const openItem = (itemId: string) => {
        setOpenItemId(itemId);
    };

    const closeItems = () => {
        setOpenItemId("");
    };

    const contextState: AccordionContextType = {
        openItemId,
        openItem,
        closeItems,
    };

    return (
        <AccordionContext.Provider value={contextState}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
};

Accordion.Item = AccordionItem;

export default Accordion;
