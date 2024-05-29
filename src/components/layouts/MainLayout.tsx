import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <main>
            <menu>
                <Link to="/">Home</Link>
                <Link to="/accordion">Accordion Test</Link>
                <Link to="/searchablelist">Searchable List Test</Link>
                <Link to="/investment-calculator">Investment Calculator</Link>
            </menu>
            <section>
                <Outlet />
            </section>
        </main>
    );
}
