import React from 'react';
import { render } from '@testing-library/react';

import Home from '../../pages/Home';

describe('Search User', () => {
    it('should be able to search user', () => {
        const { debug } = render(<Home />);

        debug();
    });
});