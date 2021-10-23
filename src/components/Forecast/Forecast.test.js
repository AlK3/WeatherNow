import 'core-js';
import React from 'react';
import { fork, root } from 'effector-root';
import { Provider } from 'effector-react/ssr';
import { render } from '@testing-library/react';
import { Forecast } from './Forecast';

let scope;

beforeEach(() => {
  scope = fork(root);
});

const Wrapper = ({ children }) => (
  <Provider value={scope}>
    <React.Suspense fallback='test loading'>
      {children}
    </React.Suspense>
  </Provider>
);

test('render', () => {
  render(<Forecast />, { wrapper: Wrapper });
});