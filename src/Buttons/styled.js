import styled from "styled-components";

export const ButtonStyled = styled.button`
    color: teal;
    background-color: ${({ theme }) => theme.color.white};
    border: none;
    margin: 10px;
    transition: 0.25s;

    &:hover {
        filter: brightness(120%);
    }

    &:active {
        filter: brightness(150%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.gray};
    }
`;