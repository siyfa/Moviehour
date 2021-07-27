import styled from "styled-components";

export const Wrapper = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 0 20px;
  .topNav {
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      text-decoration: none;
    }
  }
  h1 {
    color: var(--medGrey);
    padding: 0 10px;

    @media screen and (max-width: 768) {
      font-size: var(--fontBig);
    }
  }
  h1 {
    color: var(--medGrey);
    margin-top: 6px;

    @media screen and (max-width: 768) {
      font-size: var(--fontMed);
    }
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 2rem;
`;
