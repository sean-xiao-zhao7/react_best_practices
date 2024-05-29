import React, { useState } from "react";

import CalculatorInput from "../investment-calculator/calculator_input";
import { InvestmentInputType } from "../../types/investmentInputType";
import { calculateInvestmentResults } from "../../utils/investment";

export default function InvestmentCalculatorPage() {
    const [inputs, setInputs] = useState<InvestmentInputType>({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });
    const result = calculateInvestmentResults(inputs);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <>
            <h2>Investment Calculator</h2>
            <div id="investment-calculator-inputs">
                <CalculatorInput
                    id="initial-investment"
                    label="Initial Investment"
                    onChange={onChange}
                />
                <CalculatorInput
                    id="annual-investment"
                    label="Annual Investment"
                    onChange={onChange}
                />
                <CalculatorInput
                    id="expected-returns"
                    label="Expected Returns"
                    onChange={onChange}
                />
                <CalculatorInput
                    id="duration"
                    label="Duration"
                    onChange={onChange}
                />
            </div>
            <div></div>
        </>
    );
}
