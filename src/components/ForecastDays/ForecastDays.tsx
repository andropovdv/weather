import classes from "./ForecastDays.module.css";
import { ForecastWork } from "../../store/types/IForecast";
import {
  ForecastDay,
  ForecastImage,
  ForecastLeftMobile,
  ForecastRightMobile,
  ForecastSkyDesktop,
  ForecastSubtitle,
  ForecastTemperature,
  ForecastTemperatureNight,
  ForecastTitle,
} from "../../sylesComponent/StyledForecastDays";
import dayjs from "dayjs";
import "dayjs/locale/ru";
import { weatherIconSwitch } from "../../utils/weaterCodeImg";
import { weatherCodeText } from "../../utils/weateherCodeText";
import { useEffect, useState } from "react";

type Props = {
  weatherData: ForecastWork;
  screenWidth: number;
};

export const ForecastDays = ({ weatherData, screenWidth }: Props) => {
  const now = dayjs(weatherData.time).locale("ru").format("dd");
  const nowData = dayjs(weatherData.time).locale("ru").format("DD MMM");
  const weatherCodeImg = weatherIconSwitch(weatherData.weathercode);

  const weatherText = weatherCodeText(weatherData.weathercode);

  const [widthScreen, setWidthScreen] = useState<number>(screenWidth);

  const detectSize = () => {
    setWidthScreen(document.documentElement.scrollWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);

    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [widthScreen]);

  return (
    <ForecastDay>
      {widthScreen <= 425 ? (
        <>
          <ForecastLeftMobile>
            <ForecastTitle>{`${now}`}</ForecastTitle>
            <ForecastSubtitle>{`${nowData}`}</ForecastSubtitle>
          </ForecastLeftMobile>
          <img className={classes.days__img} src={weatherCodeImg} alt="sun" />
          <ForecastRightMobile>
            <ForecastTemperature>
              {`${Math.round(weatherData.temperature_2m_max)}º`}
            </ForecastTemperature>
            <ForecastTemperatureNight>
              {`${Math.round(weatherData.temperature_2m_min)}º`}
            </ForecastTemperatureNight>
            <ForecastSkyDesktop>{`${weatherText}`}</ForecastSkyDesktop>
          </ForecastRightMobile>
        </>
      ) : (
        <>
          <div>
            <ForecastTitle>{`${now}`}</ForecastTitle>
            <ForecastSubtitle>{`${nowData}`}</ForecastSubtitle>
            <ForecastImage src={weatherCodeImg} />
            <ForecastTemperature>
              {`${Math.round(weatherData.temperature_2m_max)}º`}
            </ForecastTemperature>
            <ForecastTemperatureNight>
              {`${Math.round(weatherData.temperature_2m_min)}º`}
            </ForecastTemperatureNight>
          </div>
          <ForecastSkyDesktop>{`${weatherText}`}</ForecastSkyDesktop>
        </>
      )}
    </ForecastDay>
  );
};
