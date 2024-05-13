export default function SearchableList({ listItems }) {
    return (
        <div className="searchable-list">
            <input type="search" placeholder="Enter filter words" />
            <ul>
                {listItems.map((item) => {
                    return <li key={item.id}>{item.title}</li>;
                })}
            </ul>
        </div>
    );
}
