import React from 'react';

import { render, fireEvent, waitForElement } from '@testing-library/react';

import Button from '../../components/Button';

describe('Button component', () => {
    it('should to be able to click on the button', async () => {
        const { getByTestId } = render(<Button />)
        const btn = await waitForElement(
            () => getByTestId('btn-submit')
        );

        expect(fireEvent.click(btn));
    });
});