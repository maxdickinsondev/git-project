import styled from 'styled-components';

export const Container = styled.div`
    width: 30%;

    @media (max-width: 700px) {
        width: 100%;
    }
`;

export const ButtonSubmit = styled.button.attrs({
    type: "submit"
})`
    background: ${props => props.background};
    border: none;
    border-radius: 0.4rem;
    color: ${props => props.color};
    height: 2.8rem;
    padding: 20px;
    font: 400 1rem Roboto;

    width: 10rem;

    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 700px) {
        margin-top: 1.5rem;
        width: 100%;
    }
`;