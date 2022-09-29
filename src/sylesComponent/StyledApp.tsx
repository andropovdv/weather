import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1024px;
  height: 550px;
  background-color: ${(props) => props.theme.colors.body};
  /* background-color: #0d1117; */
  border-radius: 5px;
  padding: 5px;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.25fr 1fr 1fr;
  gap: 15px 0;

  @media (max-width: 425px) {
    position: static;
    display: block;
    padding: 10px;
    width: 100%;
    height: 100%;
  }
`;

export const Header = styled.div`
  padding: 5px 20px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.thisDayBackground};
  box-shadow: 0px 0px 28px 3px rgba(180, 180, 180, 0.25);
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 25px;
    height: 25px;
    cursor: auto;

    filter: ${(props) =>
      props.theme.name === "dark"
        ? `
      invert(97%) sepia(48%) saturate(0%) hue-rotate(20deg)
      brightness(103%) contrast(103%)
    `
        : `
      invert(68%) sepia(33%) saturate(175%) hue-rotate(183deg) brightness(87%) contrast(80%);
    `};
  }

  img:last-child {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.current};
  }
`;

export const Loader = styled.div`
  box-sizing: border-box;
  position: absolute;
  margin: auto;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 1024px;
  height: 500px;
  background-color: ${(props) => props.theme.colors.body};

  img {
    filter: ${(props) =>
      props.theme.name === "dark"
        ? `
      invert(97%) sepia(48%) saturate(0%) hue-rotate(20deg)
      brightness(103%) contrast(103%)
    `
        : `
      invert(68%) sepia(33%) saturate(175%) hue-rotate(183deg) brightness(87%) contrast(80%);
    `};
  }

  border-radius: 5px;
  padding: 5px;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 425px) {
    position: static;
    display: block;
    padding: 10px;
    width: 100%;
    height: 100vh;

    img {
      display: block;
      margin: 0 auto;

      filter: ${(props) =>
        props.theme.name === "dark"
          ? `
      invert(97%) sepia(48%) saturate(0%) hue-rotate(20deg)
      brightness(103%) contrast(103%)
    `
          : `
      invert(68%) sepia(33%) saturate(175%) hue-rotate(183deg) brightness(87%) contrast(80%);
    `};
    }
  }
`;

export const TodayWeaterBlock = styled.div`
  border-radius: 20px;

  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr;
  gap: 0 10px;

  @media (max-width: 425px) {
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: 0fr 0fr;
    gap: 10px 0;
    margin-bottom: 10px;
  }
`;

export const ForecastBlock = styled.div`
  border-radius: 20px;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0 10px;

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 1fr);
    gap: 10px 0;
  }
`;
