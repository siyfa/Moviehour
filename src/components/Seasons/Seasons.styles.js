import styled from "styled-components";

export const Wrapper = styled.div``;

export const Content = styled.div`
  padding: 10px;

  .Thumb {
    display: flex;
    border-bottom: 1px dotted grey;
    padding: 15px 0;

    @media screen and (max-width: 600px) {
      flex-wrap: wrap;
    }

    img {
      flex: 10%;
    }
    .info {
      flex: 90%;
      margin-left: -90px;

      @media screen and (max-width: 500px) {
        margin: 0;
      }

      p {
        color: var(--darkGrey);
        font-size: var(--fontMed);

        @media screen and (max-width: 500px) {
          font-size: var(--fontSmall);
        }
      }
    }
  }
  img {
    width: 70%;

    @media screen and (max-width: 500px) {
      width: 50%;
    }
  }
`;
