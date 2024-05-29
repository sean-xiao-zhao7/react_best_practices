import React from "react";

export default function CalculatorInput({
    id,
    label,
}: {
    id: string;
    label: string;
}) {
    return (
        <div className="calculator-input">
            <label htmlFor={id}>{label}</label>
            <input type="number" name={id} id={id} />
        </div>
    );
}
