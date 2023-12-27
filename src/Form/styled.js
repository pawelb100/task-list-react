import styled from "styled-components";

export const TaskContent = styled.input`
    flex-grow: 1;
    font-size: 18px;
    margin-right: 25px;
    padding: 15px;
    border: 2px solid #eaebeb;

    @media (max-width: 767px) {
        margin-bottom: 15px;
        margin-right: 0px;
    }
`;

export const FormStyled = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 757px) {
        flex-direction: column;
    }
`;

export const AddTaskButton = styled.button`
    font-size: 18px;
    padding: 15px;
    background-color: teal;
    color: white;
    transition: 1.5s;

    &:hover {
        transform: scale(1.1);
    }
`;


