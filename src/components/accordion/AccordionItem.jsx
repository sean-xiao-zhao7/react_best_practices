import { useAccordionContext } from "./Accordion";

export default function AccordionItem({ id, className, title, children }) {
    const accordionContext = useAccordionContext();
    const isOpen = id === accordionContext.openItemId;

    const clickHandler = () => {
        if (!isOpen) {
            accordionContext.openItem(id);
        } else {
            accordionContext.closeItems();
        }
    };

    return (
        <li className={className} onClick={clickHandler}>
            <h3 className="accordion-item-title">{title}</h3>
            <div
                className={
                    isOpen
                        ? "open accordion-item-content"
                        : "accordion-item-content"
                }
            >
                {children}
            </div>
        </li>
    );
}
