import { useState } from "react";

export default function SearchableList({ listItems }) {
    const [term, setTerm] = useState("");

    const filteredItems = listItems.filter((item) => item.title.includes(term));

    const handleTermUpdate = (e) => {
        setTerm(e.target.value);
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
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
}
