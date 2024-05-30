import React from "react";
import { InvestmentResultType } from "../../types/investmentResultType";

export default function CalculatorResults({
    results,
}: {
    results: InvestmentResultType[];
}) {
    return (
        <>
            <div id="investment-calculator-results-headings">
                <div></div>
                <div>Annual Investment</div>
                <div>Interest</div>
                <div>Value at End of Year</div>
                <div>Year</div>
            </div>
            {results.map((result) => {
                return (
                    <div
                        key={result.id}
                        className="investment-calculator-results-row"
                    >
                        Entry:
                        <div>{result.annualInvestment}</div>
                        <div>{result.interest}</div>
                        <div>{result.valueEndOfYear}</div>
                        <div>{result.year}</div>
                    </div>
                );
            })}
        </>
    );
}
