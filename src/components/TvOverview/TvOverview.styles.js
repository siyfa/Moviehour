import styled from "styled-components";

export const Wrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Text = styled.p`
  color: var(--darkGrey);
  font-size: var(--fontMed);
`;

export const Details = styled.div`
  padding: 10px 10px;

  p {
    padding: 1px 10px;
    font-size: var(--fontMed);
    color: var(--darkGrey);

    .score {
      border: 1px solid var(--darkGrey);
      padding: 10px;
      border-radius: 50%;
      margin-left: 10px;
      color: var(--white);
      background-color: var(--darkGrey);
    }
  }
`;
