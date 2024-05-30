import React, { useState } from "react";

import CalculatorInput from "../investment-calculator/CalculatorInput";
import CalculatorResults from "../investment-calculator/CalulatorResults";
import { InvestmentInputType } from "../../types/investmentInputType";
import { calculateInvestmentResults } from "../../utils/investment";

export default function InvestmentCalculatorPage() {
    const [inputs, setInputs] = useState<InvestmentInputType>({
        initialInvestment: 0,
        annualInvestment: 0,
        expectedReturn: 0,
        duration: 0,
    });

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prevInputs) => {
            return {
                ...prevInputs,
                [event.target.name]: event.target.value,
            };
        });
    };

    const results = calculateInvestmentResults(inputs);

    return (
        <>
            <h2>Investment Calculator</h2>
            <div id="investment-calculator-inputs">
                <CalculatorInput
                    id="initialInvestment"
                    label="Initial Investment"
                    onChange={onChange}
                />
                <CalculatorInput
                    id="annualInvestment"
                    label="Annual Investment"
                    onChange={onChange}
                />
                <CalculatorInput
                    id="expectedReturns"
                    label="Expected Returns"
                    onChange={onChange}
                />
                <CalculatorInput
                    id="duration"
                    label="Duration"
                    onChange={onChange}
                />
            </div>
            <CalculatorResults results={results} />
        </>
    );
}
