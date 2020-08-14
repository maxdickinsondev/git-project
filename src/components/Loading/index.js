import React from 'react';
import ReactLoading from 'react-loading';

import { Container, Message } from './styles';

export default function Loading({ type, color, width, height }) {
    return (
        <Container>
            <ReactLoading 
                type={type}
                color={color}
                width={width}
                height={height}
            />

            <Message>Estamos carregando tudo para você...</Message>
        </Container>
    );
}