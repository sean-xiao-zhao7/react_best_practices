export type InvestmentInputType = {
    initial_investment: number;
    annual_investment: number; // the amount of interest earned in this year
    expected_returns: number; // investment value at end of year
    duration: number; // investment added in this year
};
