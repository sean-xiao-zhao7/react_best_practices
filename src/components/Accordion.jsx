import { createContext, useContext, useState } from "react";

const AccordionContext = createContext();

export function useAccordionContext() {
    const context = useContext(AccordionContext);

    if (!context) {
        throw new Error("No accordion context initialized.");
    }

    return context;
}

export default function Accordion({ children, className }) {
    const [openItemId, setOpenItemId] = useState(null);

    const openItem = (itemId) => {
        setOpenItemId(itemId);
    };

    const closeItems = () => {
        setOpenItemId(null);
    };

    const contextState = {
        openItemId,
        openItem,
        closeItems,
    };

    return (
        <AccordionContext.Provider value={contextState}>
            <ul className={className}>{children}</ul>
        </AccordionContext.Provider>
    );
}
