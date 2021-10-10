import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { size } from '../../utils';

export const StyledBox = styled(Box)`
  && {
    display: flex;
    padding: .4rem;
    padding-top: 5rem;
    justify-content: space-evenly;
    align-items: center;

    @media (max-width: ${size.mobileL}) {
      padding-top: 4rem;
    }
  }
`;