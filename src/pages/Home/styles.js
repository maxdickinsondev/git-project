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

export const Main = styled.main`
    margin-bottom: 2rem;
`;

export const Fieldset = styled.fieldset`
    border: none;
`;

export const Data = styled.h3`
    font: 700 2rem Roboto;
    color: #322153;

    margin-top: 2rem;
`;

export const UserContainer = styled.div`
    width: 100%;

    background: #FFF;
    padding: 1rem 2rem;

    margin-top: 2rem;

    @media (max-width: 500px) {
        width: 90vw;
        max-width: 500px;
    }
`;

export const HeaderUser = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 500px) {
        flex-direction: column;
        justify-content: center;
    }
`;

export const Image = styled.img`
    width: 5.4rem;
    height: 5.4rem;

    border-radius: 50%;
`;

export const Name = styled.span`
    margin-left: 2rem;
    font: 700 1.3rem Poppins;
`;

export const Bio = styled.p`
    margin-top: 2rem;
    font: 400 1rem Poppins;
    color: #7E839D;
`;

export const Url = styled.p`
    font: 400 1rem Poppins;
    color: #7E839D;

    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    border-top: 1px solid #DDDDDF;

    @media (max-width: 500px) {
        font-size: 0.8rem;
    }
`;

export const MapContainer = styled.div`    
    margin-top: 2rem;
`;

export const Repos = styled.h3`
    font: 700 2rem Roboto;
    color: #322153;

    margin-top: 2rem;
`;