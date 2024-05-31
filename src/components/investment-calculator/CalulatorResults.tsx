import React from "react";
import { InvestmentResultType } from "../../types/investmentResultType";

import { formatter } from "../../utils/investment";
import { CalculatorResultsDiv } from "../../stylesheets/investment_calculator";

export default function CalculatorResults({
    results,
}: {
    results: InvestmentResultType[];
}) {
    if (results.length == 0) {
        return <></>;
    }

    return (
        <>
            <CalculatorResultsDiv>
                <div>Year</div>
                <div>Annual Investment</div>
                <div>Interest</div>
                <div>Value at End of Year</div>
            </CalculatorResultsDiv>
            {results.map((result) => {
                return (
                    <CalculatorResultsDiv key={result.id}>
                        <div>{result.year}</div>
                        <div>{formatter.format(result.annualInvestment)}</div>
                        <div>{formatter.format(result.interest)}</div>
                        <div>{formatter.format(result.valueEndOfYear)}</div>
                    </CalculatorResultsDiv>
                );
            })}
        </>
    );
}
