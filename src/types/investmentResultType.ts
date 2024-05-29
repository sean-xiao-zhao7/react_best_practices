export type InvestmentResultType = {
    id: number;
    year: number;
    interest: number; // the amount of interest earned in this year
    valueEndOfYear: number; // investment value at end of year
    annualInvestment: number; // investment added in this year
};
