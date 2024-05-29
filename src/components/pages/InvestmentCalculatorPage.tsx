import React, { useState } from "react";

import CalculatorInput from "../investment-calculator/calculator_input";
import { InvestmentInputType } from "../../types/investmentInputType";
import { calculateInvestmentResults, formatter } from "../../utils/investment";

export default function InvestmentCalculatorPage() {
    const [inputs, setInputs] = useState<InvestmentInputType>({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });
    const results = calculateInvestmentResults(inputs);

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
            <div id="investment-calculator-results">
                {results.map((result) => {
                    return (
                        <div key={result.id}>
                            {result.annualInvestment}
                            {result.interest}
                            {result.valueEndOfYear}
                            {result.year}
                        </div>
                    );
                })}
            </div>
        </>
    );
}
