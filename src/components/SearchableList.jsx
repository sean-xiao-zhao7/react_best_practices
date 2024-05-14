import { useRef, useState } from "react";

export default function SearchableList({ listItems, keyGen, children }) {
    const lastChange = useRef();
    const [term, setTerm] = useState("");

    const filteredItems = listItems.filter((item) =>
        item.title.toLowerCase().includes(term.toLowerCase())
    );

    const handleTermUpdate = (e) => {
        if (lastChange.current) {
            clearTimeout(lastChange);
        }

        lastChange.current = setTimeout(() => {
            lastChange.current = null;
            setTerm(e.target.value);
        }, 500);
    };

    return (
        <div className="searchable-list">
            <input
                type="search"
                placeholder="Enter filter words"
                onChange={handleTermUpdate}
            />
            <ul>
                {filteredItems.map((item) => {
                    return <li key={keyGen(item)}>{children(item)}</li>;
                })}
            </ul>
        </div>
    );
}
