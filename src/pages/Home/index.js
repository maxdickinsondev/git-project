import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker } from 'react-leaflet';

import Input from '../../components/Input';
import Button from '../../components/Button';
import Loading from '../../components/Loading';

import { Container, Title, Text, Form, Main,
    Fieldset, Data, UserContainer, HeaderUser,
    Image, Name, Bio, Url, MapContainer, Repos,
    ReposContainer, UserReposStarred, UserName,
    RepoName
} from './styles';

import api from '../../services/api';
import key from '../../utils/key.json';

export default function Home() {
    const [user, setUser] = useState({});
    const [repoStarred, setRepoStarred] = useState([]);
    const [username, setUsername] = useState('');

    const [latitude, setLatitude] = useState(0);
    const [longitude, setLongitude] = useState(0);

    const [isClickSearch, setIsclickSeach] = useState(false);
    const [loading, setLoading] = useState(false);

    async function handleFetchDataUser(event) {
        event.preventDefault();

        try {
            const response = await api.get(`${username}`);

            console.log(response.data);
            setUser(response.data);
            setUsername('');
            setIsclickSeach(true);
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        async function handleFetchCordinatesUser() {
            try {
                const response = await api
                    .get(`https://api.opencagedata.com/geocode/v1/json?q=${user.location}&key=${key.secret}`);
                
                setLatitude(response.data.results[0].geometry.lat);
                setLongitude(response.data.results[0].geometry.lng);
            } catch (err) {
                console.log(err);
            }
        }

        handleFetchCordinatesUser();
    }, [user]);

    useEffect(() => {
        async function handleLoadRepoStarred() {
            try {
                setLoading(true);

                const response = await api.get(`/${user.login}/starred`);

                setRepoStarred(response.data);
                setLoading(false);
            } catch (err) {
                console.log(err);
            }
        }

        handleLoadRepoStarred();
    }, [user]);

    if (loading) return <Loading type="spin" color="#34CB79" />

    return (
        <Container>
            <Main>
                <Title>Bem-vindo ao explorador de repositórios</Title>

                <Text>Para começar precisamos que você informe algum usuário no campo abaixo</Text>

                <Form onSubmit={(event) => handleFetchDataUser(event)}>
                    <Input 
                        placeholder="Digite um nome de usuário"
                        background="#FFFFFF"
                        color="#7E839D"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />

                    <Button 
                        color="#FFFFFF"
                        background="#34CB79"
                    >
                        Buscar usuário
                    </Button>
                </Form>
            </Main>

            {isClickSearch ? (
                <>
                    <Fieldset>
                        <Data>Dados</Data>

                        <UserContainer>
                            <HeaderUser>
                                <Image 
                                    src={user.avatar_url}
                                    alt="User"
                                />

                                <Name> {user.login} </Name>
                            </HeaderUser>

                            <Bio> {user.bio} </Bio>

                            <Url>
                                <br />
                                {user.html_url}
                            </Url>
                        </UserContainer>
                    </Fieldset>

                    <Fieldset>
                        <Data>Endereço</Data>

                        <MapContainer>
                            <Map
                                style={{ width: '100%', height: 300 }} 
                                center={[latitude, longitude]} 
                                zoom={15}
                            >  
                                <TileLayer
                                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                />

                                <Marker position={[latitude, longitude]}>

                                </Marker>
                            </Map>
                        </MapContainer>
                    </Fieldset>

                    <Fieldset>
                        <Repos>Repositórios</Repos>

                        {repoStarred.map(star => (
                            <ReposContainer>
                                <Image 
                                    src={star.owner.avatar_url}
                                    alt="User"
                                />

                                <UserReposStarred>
                                    <UserName> {star.owner.login} </UserName>
                                    <RepoName> {star.name} </RepoName>
                                </UserReposStarred>
                            </ReposContainer>
                        ))}
                    </Fieldset>
                </>
            ) : null}
        </Container>
    );
}