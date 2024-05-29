export type InvestmentInputType = {
    initialInvestment: number;
    annualInvestment: number; // the amount of interest earned in this year
    expectedReturn: number; // investment value at end of year
    duration: number; // investment added in this year
};
