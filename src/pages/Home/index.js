import React from 'react';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Title, Text, Form } from './styles';

export default function Home() {
    return (
        <Container>
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
        </Container>
    );
}