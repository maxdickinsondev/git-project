import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Text, Form, Main,
    Fieldset, Data, UserContainer, HeaderUser,
    Image, Name, Bio, Url
} from './styles';

export default function Home() {
    return (
        <Container>
            <Main>
                <Title>Bem-vindo ao explorador de repositórios</Title>

                <Text>Para começar precisamos que você informe algum usuário no campo abaixo</Text>

                <Form>
                    <Input 
                        placeholder="maxdickinsondev"
                        background="#FFFFFF"
                        color="#7E839D"
                    />

                    <Button 
                        color="#FFFFFF"
                        background="#34CB79"
                    >
                        Buscar usuário
                    </Button>
                </Form>
            </Main>

            <Fieldset>
                <Data>Dados</Data>

                <UserContainer>
                    <HeaderUser>
                        <Image 
                            src={'https://avatars3.githubusercontent.com/u/59968647?s=460&u=81b334046950db301a9c5a3cb0fe9b264a00c8d9&v=4'}
                            alt="User"
                        />

                        <Name>maxdickinsondev</Name>
                    </HeaderUser>

                    <Bio>
                        Apaixonado por programação, procuro estudar mais e mais a cada dia para resolver problemas e programar 
                        soluções nas tecnologias mais atuais do mercado.
                    </Bio>

                    <Url>
                        <br />
                        https://github.com/maxdickinsondev
                    </Url>
                </UserContainer>
            </Fieldset>
        </Container>
    );
}