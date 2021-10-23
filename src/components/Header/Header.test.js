import React from 'react';
import { MemoryRouter } from 'react-router';
import { render } from '@testing-library/react';
import { Header } from './Header';

const Wrapper = ({ children }) => (
  <MemoryRouter>
    <React.Suspense fallback='test loading'>
      {children}
    </React.Suspense>
  </MemoryRouter>
);

test('render', () => {
  render(<Header />, { wrapper: Wrapper });
});