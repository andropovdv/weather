import styled from "styled-components";

export const TodayForecast = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.thisDayBackground};
  box-shadow: 0px 0px 28px 3px rgba(180, 180, 180, 0.25);
  padding: 10px;

  @media (max-width: 425px) {
    margin-bottom: 10px;
  }
`;

export const TodayForecastTitle = styled.div`
  font-size: 36px;
  color: ${(props) => props.theme.colors.currentTitle};
  margin-bottom: 20px;
  text-align: center;
`;

export const TodayForecastList = styled.ul`
  list-style: none;
  padding-left: 0;
  color: #939cb0;

  li {
    display: flex;
    align-items: center;
  }

  li:not(:last-child) {
    margin-bottom: 8px;
  }

  img {
    width: 30px;
    height: 30px;
  }

  span {
    padding-left: 8px;
  }
`;
