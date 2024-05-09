import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

export default function App() {
    return (
        <main>
            <section>
                <h2>Get back down now.</h2>
                <Accordion className={"accordion"}>
                    <AccordionItem
                        title="Item 1"
                        className="accordion-item"
                        id="item1"
                    >
                        <article>
                            <p>This is an item that has a lot of words.</p>
                            <p>Billy answered: "It only gets easier."</p>
                        </article>
                    </AccordionItem>
                    <AccordionItem
                        title="Item 2"
                        className="accordion-item"
                        id="item2"
                    >
                        <article>
                            <p>I'm the one that needs to find out.</p>
                            <p>Bitter sister asked mister.</p>
                        </article>
                    </AccordionItem>
                    <AccordionItem
                        title="Item 3"
                        className="accordion-item"
                        id="item3"
                    >
                        <article>
                            <p>I'm the one that craves the last match.</p>
                            <p>"Why do you think it's so unbearable?"</p>
                        </article>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
