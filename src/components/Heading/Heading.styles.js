import styled from 'styled-components';
import { size } from '../../utils';

export const Heading = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;

  @media (max-width: ${size.mobileL}) {
    font-size: 1.25rem;
  }

  @media (max-width: ${size.mobileM}) {
    font-size: 1.125rem;
  }

  @media (max-width: ${size.mobileS}) {
    font-size: 1rem;
  }
`;