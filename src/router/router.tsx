import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";

import IndexPage from "../components/pages/IndexPage";
import AccordionPage from "../components/pages/AccordionPage";
import SearchableListPage from "../components/pages/SearchableListPage";
import InvestmentCalculatorPage from "../components/pages/InvestmentCalculatorPage";
import ModalPage from "../components/pages/ModalPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <IndexPage />,
            },
            {
                path: "/accordion",
                element: <AccordionPage />,
            },
            {
                path: "/searchablelist",
                element: <SearchableListPage />,
            },
            {
                path: "/investment-calculator",
                element: <InvestmentCalculatorPage />,
            },
            {
                path: "/modal",
                element: <ModalPage />,
            },
        ],
    },
]);

export default router;
