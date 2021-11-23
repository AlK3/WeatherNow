import styled from 'styled-components';
import { size } from '../../utils';

export const StyledCardItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #F8F8F8;
  border-radius: 9px;
  margin: 4px 0 4px 0;
  padding: 8px;
  width: 90vw;

  @media (max-width: ${size.mobileL}) {
    flex-direction: column;
  }
`;