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
