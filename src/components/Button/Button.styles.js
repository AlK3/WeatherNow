import styled from 'styled-components';
import { Button } from '@material-ui/core';
import { size } from '../../utils';

const StyledButton = styled(Button)`
  && {
    margin: .5rem;
    padding: ..1rem;
    font-size: 1rem;

    @media (max-width: ${size.mobileL}) {
      font-size: .875rem;
    }

    @media (max-width: ${size.mobileM}) {
      font-size: .750rem;
    }

    @media (max-width: ${size.mobileS}) {
      font-size: .625rem;
    }
  }
`;

export const ContainedButton = styled(StyledButton)`
  && {
    background-color: #1976d3;
    color: #ffffff;

    :link, :visited, :focus {
      background-color: #1976d3;
    }

    :hover {
      background-color: #1871ca;
    }
    
    :active {
      background-color: #1871ca;
    }
  }
`;

export const OutlinedButton = styled(StyledButton)`
  && {
    border: .125rem solid #ffffff;
    background-color: #1976d3;
    border-radius: .5rem;
    color: #ffffff;

    :link, :visited, :focus {
      background-color: #1976d3;
    }

    :hover {
      background-color: #1871ca;
    }
    
    :active {
      background-color: #1871ca;
    }
  }
`;

export const TextButton = styled(StyledButton)``;