import styled from "styled-components";

export const ForecastDay = styled.div`
  padding: 10px;
  background-color: ${(props) => props.theme.colors.forecastDay};
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  height: 211px;
  justify-content: space-between;

  &:hover {
    filter: drop-shadow(0px 3px 20px rgba(147, 144, 144, 0.28));
  }

  @media (max-width: 425px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: auto;
  }
`;

export const ForecastTitle = styled.div`
  color: ${(props) => props.theme.colors.forecastTitle};
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const ForecastSubtitle = styled.div`
  color: ${(props) => props.theme.colors.forecastSubtitle};
  font-size: 17px;
  font-weight: 400;
  margin-bottom: 10px;

  @media (max-width: 425px) {
    margin-bottom: 0;
  }
`;

export const ForecastImage = styled.img`
  width: 60px;
  height: 60px;
  margin-bottom: 5px;
`;

export const ForecastTemperature = styled.div`
  color: ${(props) => props.theme.colors.forecastTitle};
  font-size: 18px;
  font-weight: 500;
`;

export const ForecastTemperatureNight = styled.div`
  color: ${(props) => props.theme.colors.forecastSubtitle};
  font-size: 13px;
  font-weight: 400;
`;

export const ForecastSkyDesktop = styled.div`
  color: ${(props) => props.theme.colors.forecastSky};
  font-size: 13px;
  font-weight: 400;
`;

export const ForecastRightMobile = styled.div`
  text-align: right;
  width: 30%;
`;

export const ForecastLeftMobile = styled.div`
  width: 30%;
`;
