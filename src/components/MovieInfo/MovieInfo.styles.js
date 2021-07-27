import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE, POSTER_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 41%,
      rgba(0, 0, 0, 0.65) 100%
    ),
    ${({ backdrop }) =>
      backdrop
        ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')`
        : "#000"};

  background-size: cover;
  background-position: center;
  object-fit: cover;
  padding: 20px 20px;
  height: 75vh;
  overflow: hidden;
  animation: animatedMovieInfo 1s;
  position: relative;

  @keyframes animatedMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  border-radius: 20px;
  height: 75vh;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }
  .trailer {
    position: absolute;
    top: 40%;
    left: 42%;

    button {
      background: transparent;
      border: 1px solid var(--darkGrey);
      border-radius: 50%;
      padding: 10px;
      box-shadow: 3px 3px 3px var(--darkGrey);
      cursuor: pointer;

      :hover {
        background: white;
        outline: none;
      }
    }
    h3 {
      font-size: var(--fontBig);
      text-align: center;
    }
    @media screen and (max-width: 600px) {
      top: 35%;
      left: 35%;
    }
  }
`;

export const Thumb = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop}')` : "#000"};
  background-size: 60%;
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  border-radius: 30px;
  filter: blur(2px);
  -webkit-filter: blur(2px);
  opacity: 0.9;
`;

export const Text = styled.div`
  width: 100%;
  padding: 10px 20px;
  color: var(--white);
  overflow: hidden;

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }
  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0 0 0 40px;

    p {
      margin: 0;
    }
  }

  h1 {
    @media and screen (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
