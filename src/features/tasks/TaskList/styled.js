import styled, { css } from "styled-components";

export const TasksStyled = styled.ul`
    list-style-type: none;
    padding: 0px;
`;

export const TaskItem = styled.li`
    display: flex;
    align-items: center;    
    border-bottom: 2px solid ${({ theme }) => theme.color.blackHaze };
    padding: 10px;

    ${({ hide }) => hide && css`
        display: none;
    `}
`;

export const TaskContent = styled.span`
    flex-grow: 1;
    font-size: 18px;

    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const TaskButton = styled.button`
    min-width: 35px;
    min-height: 35px;
    border: none;
    font-size: 20px;
    color: ${({ theme }) => theme.color.white };
    transition: 1s;

    ${({ done }) => done && css`
        margin-right: 10px;
        background-color: ${({ theme }) => theme.color.forestGreen };

        &:hover {
            filter: brightness(130%);
        }

    `}

    ${({ remove }) => remove && css`
        margin-left: 10px;
        background-color: ${({ theme }) => theme.color.alizarinCrimson };

        &:hover {
            filter: brightness(130%);
        }
    `}

`;