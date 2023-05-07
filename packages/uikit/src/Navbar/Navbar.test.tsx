/* eslint-disable @typescript-eslint/no-var-requires */
import React from 'react';

import { render } from '~/test/utils';

import Navbar from './Navbar';

describe('Navbar', () => {
  it('Should render the component', () => {
    const { queryByTestId } = render(
      <Navbar
        data-testid="navbar"
      />,
    );

    const navbar = queryByTestId('navbar');

    expect(navbar).toBeInTheDocument();
    expect(navbar).toMatchSnapshot();
  });
});
