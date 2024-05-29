import React, { useState } from "react";

import CalculatorInput from "../investment-calculator/calculator_input";
import { InvestmentInputType } from "../../types/investmentInputType";

export default function InvestmentCalculatorPage() {
    const [inputs, setInputs] = useState<InvestmentInputType>({
        initial_investment: 0,
        annual_investment: 0,
        expected_returns: 0,
        duration: 0,
    });

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
