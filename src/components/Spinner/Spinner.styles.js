import styled from "styled-components";

export const Spinner = styled.div`
  border: 5px solid var(--lightGrey);
  border-top: 5px solid var(--medgrey);
  border-radius: 50px;
  width: 50px;
  height: 50px;
  animation: spin 0.8s linear infinite;
  margin: 20px auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
