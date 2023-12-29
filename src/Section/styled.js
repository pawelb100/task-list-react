import styled from 'styled-components';

export const SectionStyled = styled.section`
    background-color: ${({ theme }) => theme.color.white };
    margin: 10px 0px; 
`;

export const SectionHeader = styled.div`
    display: flex;
    border-bottom: 2px solid ${({ theme }) => theme.color.blackHaze };
    padding: 10px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax }) { 
        flex-direction: column;
    }  
`;

export const SectionTitle = styled.h2`
    margin: 10px;
    flex-grow: 1;
`;

export const SectionContent = styled.div`
    padding: 20px;
`;