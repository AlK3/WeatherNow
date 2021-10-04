import styled from 'styled-components';
import { Button } from '@material-ui/core';

export const BlueButton = styled(Button)`
  && {
    color: white;
    margin: .5rem;
    padding: ..1rem;
    background-color: #1976d3;
    :focus {
      background-color: #1871ca;
    }
  }
`;

export const StyledButton = styled(Button)`
  && {
    margin: .5rem;
    padding: ..1rem;
  }
`;