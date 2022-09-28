import styled from "styled-components";

export const TodayCurrent = styled.div`
  border-radius: 20px;
  background-color: ${(props) => props.theme.colors.thisDayBackground};
  box-shadow: 0px 0px 28px 3px rgba(180, 180, 180, 0.25);
  padding: 10px 20px;
  display: grid;
  /* grid-template-rows: 2fr 1fr; */
`;

export const CurrentContext = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 110px;
    height: 110px;

    @media (max-width: 425px) {
      width: 80px;
      height: 80px;
    }
  }
`;

export const CurrentContextTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

export const CurrentTitleTemperature = styled.div`
  font-size: 70px;
  font-weight: 500;
  color: #4793ff;

  @media (max-width: 425px) {
    font-size: 50px;
  }
`;

export const CurrentTitleFooter = styled.div`
  font-size: 36px;
  color: ${(props) => props.theme.colors.currentTitle};
`;
