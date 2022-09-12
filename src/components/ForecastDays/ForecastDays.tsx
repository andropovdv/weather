import classes from "./ForecastDays.module.css";
import { ForecastWork } from "../../store/types/IForecast";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { weatherIconSwitch } from "../../utils/weaterCodeImg";
import { weatherCodeText } from "../../utils/weateherCodeText";

type Props = {
  weatherData: ForecastWork;
};

export const ForecastDays = ({ weatherData }: Props) => {
  const now = dayjs(weatherData.time).locale("ru").format("dd");
  const nowData = dayjs(weatherData.time).locale("ru").format("DD MMM");
  const weatherCodeImg = weatherIconSwitch(weatherData.weathercode);

  const weatherText = weatherCodeText(weatherData.weathercode);

  return (
    <div className={classes.forecast__days}>
      <div className={classes.days__block}>
        <div className={classes.days__title}>{`${now}`}</div>
        <div className={classes.days__subtitle}>{`${nowData}`}</div>
        <img className={classes.days__img} src={weatherCodeImg} alt="sun" />
        <div className={classes.days__temp}>{`${Math.round(
          weatherData.temperature_2m_max
        )}º`}</div>
        <div className={classes.days__temp_night}>{`${Math.round(
          weatherData.temperature_2m_min
        )}º`}</div>
      </div>
      <div className={classes.days__sky}>{`${weatherText}`}</div>
    </div>
  );
};
