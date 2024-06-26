import React from "react";

import Location from "../searchablelist/Location";
import SearchableList from "../searchablelist/SearchableList";

import { LOCATIONS } from "../../data/locations";

import { LocationItemType } from "../../types/locationItemType";

export default function SearchableListPage() {
    const keyGen = (item: string | LocationItemType) => {
        if (typeof item !== "string") return item.id;
        return item;
    };

    return (
        <>
            <SearchableList listItems={LOCATIONS} keyGen={keyGen}>
                {(item: LocationItemType) => <Location location={item} />}
            </SearchableList>
        </>
    );
}
