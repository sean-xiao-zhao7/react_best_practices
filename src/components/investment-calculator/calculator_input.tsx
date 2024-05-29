import React from "react";

export default function CalculatorInput({
    id,
    label,
    onChange,
}: {
    id: string;
    label: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) {
    return (
        <div className="calculator-input">
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                name={id}
                id={id}
                onChange={(event) => onChange(event)}
            />
        </div>
    );
}
