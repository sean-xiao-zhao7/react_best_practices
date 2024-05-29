import React from "react";
import CalculatorInput from "../investment-calculator/calculator_input";

export default function InvestmentCalculatorPage() {
    return (
        <>
            <h2>Investment Calculator</h2>
            <div id="investment-calculator-inputs">
                <CalculatorInput
                    id="initial-investment"
                    label="Initial Investment"
                />
                <CalculatorInput
                    id="annual-investment"
                    label="Annual Investment"
                />
                <CalculatorInput
                    id="expected-returns"
                    label="Expected Returns"
                />
                <CalculatorInput id="duration" label="Duration" />
            </div>
            <div></div>
        </>
    );
}
