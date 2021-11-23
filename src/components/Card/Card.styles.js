import styled from 'styled-components';

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 20px 20px 20px;
  background: ${props => props.color};
  border-radius: 24px;
  overflow: hidden;
`;