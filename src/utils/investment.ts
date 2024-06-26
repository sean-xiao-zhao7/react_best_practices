// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)

import { InvestmentInputType } from "../types/investmentInputType";
import { InvestmentResultType } from "../types/investmentResultType";

export function calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
}: InvestmentInputType): InvestmentResultType[] {
    if (!duration) {
        return [];
    }

    const annualData: InvestmentResultType[] = [];
    let investmentValue = initialInvestment;

    for (let i = 0; i < duration; i++) {
        const interestEarnedInYear =
            Math.round(investmentValue * (expectedReturn / 100) * 100) / 100;

        investmentValue += interestEarnedInYear + annualInvestment;
        annualData.push({
            id: new Date().getTime() + Math.random(),
            year: i + 1, // year identifier
            interest: interestEarnedInYear, // the amount of interest earned in this year
            valueEndOfYear: Math.round(investmentValue * 100) / 100, // investment value at end of year
            annualInvestment: annualInvestment, // investment added in this year
        });
    }

    return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
});
