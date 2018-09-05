import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Header from '..';

describe('Header component', () => {
  afterEach(cleanup);

  it('renders correctly', () => {
    expect(render(<Header />).container).toMatchSnapshot();
  });
});
