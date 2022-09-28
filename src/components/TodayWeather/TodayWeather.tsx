import {
  CurrentContextTitle,
  CurrentTitleFooter,
  CurrentTitleTemperature,
  CurrentContext,
  TodayCurrent,
} from "../../sylesComponent/StyledTodayWeather";
import classes from "./TodayWeather.module.css";

type Props = {
  city: string;
  temperature: number;
  weatherImg?: any;
};

export const TodayWeater = ({ city, temperature, weatherImg }: Props) => {
  const now = new Date().toLocaleTimeString().slice(0, -3);

  return (
    <TodayCurrent>
      <CurrentContext>
        <img src={weatherImg} alt="sun" />
        <CurrentContextTitle>
          <CurrentTitleTemperature>
            {`${Math.round(temperature) || "N/A"}`}&deg;
          </CurrentTitleTemperature>
          <CurrentTitleFooter>Сейчас</CurrentTitleFooter>
        </CurrentContextTitle>
      </CurrentContext>
      <div className={classes.today__footer}>
        <div className={classes.footer__text}>{`${city}`}</div>
        <div className={classes.footer__text}>{`Время: ${now}`}</div>
      </div>
    </TodayCurrent>
  );
};
