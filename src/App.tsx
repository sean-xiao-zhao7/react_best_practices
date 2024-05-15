import React from "react";

import Accordion from "./components/Accordion";
import Location from "./components/Location";
import SearchableList from "./components/SearchableList";
import { LOCATIONS } from "./constants/locations";

type itemType = {
    id: string;
    title: string;
    description: string;
};

export default function App() {
    const keyGen = (item: string | itemType) => {
        if (typeof item !== "string") return item.id;
        return item;
    };

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
                <SearchableList listItems={LOCATIONS} keyGen={keyGen}>
                    {(item) => <Location location={item} />}
                </SearchableList>
            </section>
        </main>
    );
}
