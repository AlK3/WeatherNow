import styled from 'styled-components';

export const LoaderBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLoader = styled.div`
  content: " ";
  display: block;
  width: 4rem;
  height: 4rem;
  margin: .5rem;
  border-radius: 50%;
  border: .375rem solid #b1e159;
  border-color: #b1e159 transparent #b1e159 transparent;
  animation: lds-dual-ring 1.2s linear infinite;

  @keyframes lds-dual-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;