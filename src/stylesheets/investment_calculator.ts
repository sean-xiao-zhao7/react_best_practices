import styled from "styled-components";

export const CalculatorInputDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    input {
        padding: 0.5rem;
    }

    label {
        padding-bottom: 0.5rem;
    }
`;

export const CalculatorResultsDiv = styled.div`
    margin-top: 2rem;

    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4));
    grid-row-gap: 1rem;
    justify-items: center;

    div {
        overflow: scroll;
    }
`;
