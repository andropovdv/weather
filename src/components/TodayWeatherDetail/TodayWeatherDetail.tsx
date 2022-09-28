import classes from "./TodayWeatherDetail.module.css";
import termometer from "../../assets/thermometer.svg";
import humidity from "../../assets/humidity.svg";
import evaporator from "../../assets/Evaporator.svg";
import wing from "../../assets/wind.svg";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { ForecastWork } from "../../store/types/IForecast";
import {
  TodayForecast,
  TodayForecastList,
  TodayForecastTitle,
} from "../../sylesComponent/StyledTodayForecast";

type Props = {
  weatherData: ForecastWork;
};

export const TodayWeaterDetail = ({ weatherData }: Props) => {
  const now = dayjs().locale("ru").format("DD MMMM YYYY");

  const windDidection = Math.floor(
    weatherData.winddirection_10m_dominant / 22.5 + 0.5
  );
  const arr = [
    "С",
    "ССВ",
    "СВ",
    "ВСВ",
    "В",
    "ВЮВ",
    "ЮВ",
    "ЮЮВ",
    "Ю",
    "ЮЮЗ",
    "ЮЗ",
    "ЗЮЗ",
    "З",
    "ЗСЗ",
    "СЗ",
    "ССЗ",
  ];
  const res = arr[windDidection % 16];

  return (
    <TodayForecast>
      <TodayForecastTitle>{`Сегодня: ${now}`}</TodayForecastTitle>
      <TodayForecastList>
        <li>
          <img src={termometer} alt="Температура" />
          <span>
            {`Температура: ${
              weatherData.temperature_2m_max || "--"
            }º  , ощущается
                 как ${weatherData.apparent_temperature_max}º` || "--"}
          </span>
        </li>
        <li>
          <img src={humidity} alt="Давление" />
          <span>Давление</span>
        </li>
        <li>
          <img src={evaporator} alt="Осадки" />
          <span>
            {weatherData.precipitation_sum !== 0
              ? `Осадки: ${weatherData.precipitation_sum} мм`
              : "Без осадков"}
          </span>
        </li>
        <li>
          <img src={wing} alt="Ветер" />
          <span>{`Ветер: ${res} скоростью ${weatherData.windspeed_10m_max} км/ч`}</span>
        </li>
      </TodayForecastList>
    </TodayForecast>
  );
};
