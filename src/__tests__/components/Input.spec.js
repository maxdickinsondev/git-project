import React from 'react';

import { fireEvent, render, waitForElement } from '@testing-library/react';

import Input from '../../components/Input';

describe('Input component', () => {
    it('should to be able to change input search user', async () => {
        const { getByTestId } = render(<Input />);
        const fieldNode = await waitForElement(
            () => getByTestId('field-input')
        );

        fireEvent.change(fieldNode, { target: { value: 'username' } });
        expect(fieldNode.value).toEqual('username');
    });
});