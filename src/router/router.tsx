import React from "react";
import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../components/layouts/MainLayout";

import IndexPage from "../components/pages/IndexPage";
import AccordionPage from "../components/pages/AccordionPage";
import SearchableListPage from "../components/pages/SearchableListPage";

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
        ],
    },
]);

export default router;
