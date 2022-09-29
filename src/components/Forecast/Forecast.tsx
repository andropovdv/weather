import { ForecastWork } from "../../store/types/IForecast";
import { ForecastDays } from "../ForecastDays/ForecastDays";

type Props = {
  weatherData: ForecastWork[];
  screenWidth: number;
};

export const Forecast = ({ weatherData, screenWidth }: Props) => {
  return (
    <>
      {weatherData.map((el, idx) => (
        <ForecastDays key={idx} weatherData={el} screenWidth={screenWidth} />
      ))}
    </>
  );
};
