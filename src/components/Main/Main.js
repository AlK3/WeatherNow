import React from 'react';
import { StyledMain } from './Main.styles';

export const Main = ({ children }) => {
  return (
    <StyledMain>
      {children}
    </StyledMain>
  );
}