import { useAccordionContext } from "./Accordion";

export default function AccordionItem({
    parentId,
    className,
    title,
    children,
}) {
    const accordionContext = useAccordionContext();
    const isOpen = parentId === accordionContext.openItemId;

    return (
        <li>
            <h3>{title}</h3>
            <div className={isOpen ? "open" : undefined}>{children}</div>
        </li>
    );
}
