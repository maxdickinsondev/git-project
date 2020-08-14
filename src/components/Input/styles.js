import styled from 'styled-components';

export const Container = styled.div`
   width: 100%;
`;

export const TextInput = styled.input`
    padding: 0.5rem 2rem;
    border: none;
    border-radius: 0.8rem;
    color: ${props => props.color};
    font: 400 1.4rem Poppins;

    width: 95%;

    @media (max-width: 700px) {
        width: 100%;
    }
`;