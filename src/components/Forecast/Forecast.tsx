import { ForecastWork } from "../../store/types/IForecast";
import { ForecastDays } from "../ForecastDays/ForecastDays";

type Props = {
  weatherData: ForecastWork[];
};

export const Forecast = ({ weatherData }: Props) => {
  return (
    <>
      {weatherData.map((el, idx) => (
        <ForecastDays key={idx} weatherData={el} />
      ))}
    </>
  );
};
