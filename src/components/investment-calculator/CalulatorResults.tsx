import React from "react";
import { InvestmentResultType } from "../../types/investmentResultType";

export default function CalculatorResults({
    results,
}: {
    results: InvestmentResultType[];
}) {
    return (
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
    );
}
