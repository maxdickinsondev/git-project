import styled from 'styled-components';

export const Container = styled.div`
    width: 90vw;

    max-width: 700px;
    margin: 0 auto;
`;

export const Title = styled.h1`
    font: 700 2.8rem Roboto;
    color: #322153;
`;

export const Text = styled.h3`
    font: 400 1.8rem Poppins;
    color: #7E839D;

    margin-top: 2rem;
`;

export const Form = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin-top: 7.4rem;

    @media (max-width: 700px) {
        flex-direction: column;
    }
`;