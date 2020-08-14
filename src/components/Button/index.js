import React from 'react';

import { Container, ButtonSubmit } from './styles';

export default function Button({ background, color, children }) {
    return (
        <Container>
            <ButtonSubmit 
                color={color}
                background={background}
            > 
                {children} 
            </ButtonSubmit>
        </Container>
    );
}