import Accordion from "./components/Accordion";
import AccordionItem from "./components/AccordionItem";

export default function App() {
    return (
        <main>
            <section>
                <h2>Why work for us?</h2>
                <Accordion className={"accordion"}>
                    <AccordionItem title="Item 1">
                        <article>
                            <p>This is an item that has a lot of words.</p>
                            <p>Billy answered: "It only gets easier."</p>
                        </article>
                    </AccordionItem>
                </Accordion>
            </section>
        </main>
    );
}
