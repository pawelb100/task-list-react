import styled, { css } from "styled-components";

export const ButtonStyled = styled.button`
    color: teal;
    background-color: white;
    border: none;
    margin: 10px;
    transition: 0.25s;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:active {
        color: hsl(180, 100%, 55%);
    }

    &:disabled {
        color: grey;
    }
`;