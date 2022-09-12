import classes from "./TodayWeather.module.css";

type Props = {
  city: string;
  temperature: number;
  weatherImg?: any;
};

export const TodayWeater = ({ city, temperature, weatherImg }: Props) => {
  const now = new Date().toLocaleTimeString().slice(0, -3);

  return (
    <div className={classes.today__current}>
      <div className={classes.today__context}>
        <img src={weatherImg} alt="sun" />
        <div className={classes.context__title}>
          <div className={classes.title__temp}>
            {`${Math.round(temperature) || "N/A"}`}&deg;
          </div>
          <div className={classes.title__footer}>Сейчас</div>
        </div>
      </div>
      <div className={classes.today__footer}>
        <div className={classes.footer__text}>{`Город: ${city}`}</div>
        <div className={classes.footer__text}>{`Время: ${now}`}</div>
      </div>
    </div>
  );
};
