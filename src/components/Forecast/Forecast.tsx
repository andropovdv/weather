import { ForecastWork } from "../../store/types/IForecast";
import { ForecastDays } from "../ForecastDays/ForecastDays";
import classes from "./Forecast.module.css";

type Props = {
  weatherData: ForecastWork[];
};

const tempDay = [1, 2, 3, 4, 5, 6];

export const Forecast = ({ weatherData }: Props) => {
  return (
    <>
      {weatherData.map((el, idx) => (
        <ForecastDays key={idx} weatherData={el} />
      ))}
    </>
  );
};
