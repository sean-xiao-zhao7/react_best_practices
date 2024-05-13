import Accordion from "./components/Accordion";
import SearchableList from "./components/SearchableList";

export default function App() {
    const PLACES = [
        {
            id: "african-savanna",
            title: "African Savanna",
            description: "Experience the beauty of nature.",
        },
        {
            id: "amazon-river",
            title: "Amazon River",
            description: "Get to know the largest river in the world.",
        },
        {
            id: "caribbean-beach",
            title: "Caribbean Beach",
            description: "Enjoy the sun and the beach.",
        },
        {
            id: "desert-dunes",
            title: "Desert Dunes",
            description: "Discover the desert life.",
        },
        {
            id: "forest-waterfall",
            title: "Forest Waterfall",
            description: "Listen to the sound of the water.",
        },
    ];

    return (
        <main>
            <section>
                <h2>Get back down now.</h2>
                <Accordion className={"accordion"}>
                    <Accordion.Item
                        title="Item 1"
                        className="accordion-item"
                        id="item1"
                    >
                        <article>
                            <p>This is an item that has a lot of words.</p>
                            <p>Billy answered: "It only gets easier."</p>
                        </article>
                    </Accordion.Item>
                    <Accordion.Item
                        title="Item 2"
                        className="accordion-item"
                        id="item2"
                    >
                        <article>
                            <p>I'm the one that needs to find out.</p>
                            <p>Bitter sister asked mister.</p>
                        </article>
                    </Accordion.Item>
                    <Accordion.Item
                        title="Item 3"
                        className="accordion-item"
                        id="item3"
                    >
                        <article>
                            <p>I'm the one that craves the last match.</p>
                            <p>"Why do you think it's so unbearable?"</p>
                        </article>
                    </Accordion.Item>
                </Accordion>
            </section>
            <section>
                <SearchableList listItems={PLACES} />
            </section>
        </main>
    );
}
