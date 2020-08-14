import React from 'react';

import { Container, TextInput } from './styles';

export default function Input({ placeholder, background, color }) {
    return (
        <Container>
            <TextInput 
                placeholder={placeholder}
                background={background}
                color={color}
            />
        </Container>
    );
}