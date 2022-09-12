import { useEffect, useState } from "react";
import classes from "./App.module.css";
import { Forecast } from "./components/Forecast/Forecast";
import { TodayWeater } from "./components/TodayWeather/TodayWeather";
import { TodayWeaterDetail } from "./components/TodayWeatherDetail/TodayWeatherDetail";
import { useAppDispatch, useAppSelector } from "./hooks/state";
import {
  selectCityRus,
  selectCurrentWeather,
  selectForecast,
  selectGepIp,
} from "./store/selectors";
import { getOsmCityName } from "./store/thunks/cityRusThunk";
import { getCurrentWeather } from "./store/thunks/currentWeatherThunk";
import { getForecast } from "./store/thunks/forecastThunk";
import { getGeoIP } from "./store/thunks/geoipThunk";
import { weatherIconSwitch } from "./utils/weaterCodeImg";

type Props = {};

const App = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const { geoip } = useAppSelector(selectGepIp);
  const { city } = useAppSelector(selectCityRus);
  const { current } = useAppSelector(selectCurrentWeather);
  const { forecast } = useAppSelector(selectForecast);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getGeoIP());
  }, []);

  useEffect(() => {
    if (geoip.city) {
      // dispatch(getCiyRus(geoip.city));
      Promise.all([
        dispatch(getOsmCityName(+geoip.latitude, +geoip.longitude)),
        dispatch(getCurrentWeather(+geoip.latitude, +geoip.longitude)),
        dispatch(getForecast(+geoip.latitude, +geoip.longitude)),
      ]).then(() => setLoading(false));
    }
  }, [geoip]);

  const daysWeather = forecast.slice(1, 7);

  if (loading) {
    return (
      <div className={classes.container} style={{ color: "#FFF" }}>
        Loading
      </div>
    );
  }

  return (
    <>
      <div className={classes.container}>
        <div className={classes.today}>
          <TodayWeater
            city={city.address?.city || "Неопределен"}
            temperature={current.temperature}
            weatherImg={weatherIconSwitch(current.weathercode)}
          />
          <TodayWeaterDetail weatherData={forecast[0] || []} />
        </div>
        <div className={classes.forecast}>
          <Forecast weatherData={daysWeather} />
        </div>
      </div>
    </>
  );
};

export default App;
