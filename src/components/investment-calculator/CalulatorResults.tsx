import React from "react";
import { InvestmentResultType } from "../../types/investmentResultType";

import { formatter } from "../../utils/investment";

export default function CalculatorResults({
    results,
}: {
    results: InvestmentResultType[];
}) {
    return (
        <>
            <div id="investment-calculator-results-headings">
                <div>Year</div>
                <div>Annual Investment</div>
                <div>Interest</div>
                <div>Value at End of Year</div>
            </div>
            {results.map((result) => {
                return (
                    <div
                        key={result.id}
                        className="investment-calculator-results-row"
                    >
                        <div>{result.year}</div>
                        <div>{formatter.format(result.annualInvestment)}</div>
                        <div>{formatter.format(result.interest)}</div>
                        <div>{formatter.format(result.valueEndOfYear)}</div>
                    </div>
                );
            })}
        </>
    );
}
