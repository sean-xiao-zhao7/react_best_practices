import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, className, title, children }) {
    const accordionContext = useAccordionContext();
    const isOpen = id === accordionContext.openItemId;

    const clickHandler = () => {
        accordionContext.openItem(id);
    };

    return (
        <li className={className} onClick={clickHandler}>
            <h3>{title}</h3>
            <div className={isOpen ? "open" : undefined}>{children}</div>
        </li>
    );
}
