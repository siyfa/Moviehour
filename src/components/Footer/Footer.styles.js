import styled from "styled-components";

export const Wrapper = styled.div`
  background: #eb520f;
  margin-top: 30px;
`;

export const Content = styled.div`
  padding: 20px;

  @media screen and (max-width: 600px) {
    padding: 15px 10px 10px 0px;
  }

  ul {
    list-style-type: none;
    li {
      margin-bottom: 10px;
      font-size: var(--fontBig);
    }
    a {
      color: var(--darkGrey);
      text-decoration: none;
      font-weight: bold;
    }
  }
  p {
    margin: 0;
    text-align: center;
    font-size: (--fontMed);
    color: var(--drakGrey);
  }
`;
