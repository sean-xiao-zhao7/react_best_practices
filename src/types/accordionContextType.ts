export type AccordionContextType = {
    openItemId: string;
    openItem(itemId: string): void;
    closeItems(): void;
};
