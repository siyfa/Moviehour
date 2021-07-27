import styled from "styled-components";

export const Wrapper = styled.div`
  background: #eb520f;
  padding: 0 20px;
  position: relative;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  marging: 0 auto;

  .top-left {
    display: flex;

    @media screen and (max-width: 600px) {
      display: none;
    }

    .nav {
      display: flex;

      a {
        margin-left: 15px;

        @media screen and (max-width: 400px) {
          margin-left: 10px;
        }
      }
    }
    .user .login {
      margin-left: 32px;
      border: 1px solid var(--white);
      border-radius: 5%;
      padding: 5px 5px 5px 5px;

      @media screen and (max-width: 400px) {
        margin-left: 10px;
      }

      :hover {
        background: var(--white);
        color: var(--darkGrey);
      }
    }
  }
  a {
    color: var(--white);
    text-decoration: none;
    font-size: var(--fontMed);
    font-weight: bold;

    h2 {
      border-bottom: 1px solid white;
      border-top: 1px solid white;
    }
  }
`;
export const Menu = styled.img`
  display: none;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 50px;
    display: block;
  }
`;

export const TMDBLogoImg = styled.img`
  width: 50px;

  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;
