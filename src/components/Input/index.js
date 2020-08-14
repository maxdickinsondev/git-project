import React from 'react';

import { Container, TextInput } from './styles';

export default function Input({ placeholder, background, color, value, onChange }) {
    return (
        <Container>
            <TextInput 
                placeholder={placeholder}
                background={background}
                color={color}
                value={value}
                onChange={onChange}
            />
        </Container>
    );
}