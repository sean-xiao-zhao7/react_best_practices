import React from "react";
import { CalculatorInputDiv } from "../../stylesheets/investment_calculator";

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
        <CalculatorInputDiv>
            <label htmlFor={id}>{label}</label>
            <input
                type="number"
                name={id}
                id={id}
                onChange={(event) => onChange(event)}
            />
        </CalculatorInputDiv>
    );
}
