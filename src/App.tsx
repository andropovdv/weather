import { useEffect, useState } from "react";
import classes from "./App.module.css";
import lightTheme from "./AppLight.module.css";
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
import Gear from "./assets/Gear.svg";

type Props = {};

type geo = {
  lat: number;
  log: number;
};

type mode = "dark" | "light";

const App = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [geo, setGeo] = useState<geo>({ lat: 0, log: 0 });

  const { geoip } = useAppSelector(selectGepIp);
  const { city } = useAppSelector(selectCityRus);
  const { current } = useAppSelector(selectCurrentWeather);
  const { forecast } = useAppSelector(selectForecast);

  const dispatch = useAppDispatch();
  // dispatch(getGeoIP());

  const mode: mode = "light";

  let theme = classes;

  // if (mode === "light") {
  //   theme = lightTheme;
  // }

  useEffect(() => {
    // todo геолокация продумать
    // dispatch(getGeoIP());

    navigator.geolocation.getCurrentPosition(
      (position) => {
        // console.log(position);
        setGeo({
          lat: position.coords.latitude,
          log: position.coords.longitude,
        });
      },
      (error) => {
        console.log(error.code);

        if (error.code === 1) {
          dispatch(getGeoIP());
        }
      }
      // {
      //   timeout: 10000,
      //   maximumAge: 10000,
      //   enableHighAccuracy: true,
      // }
    );
  }, []);

  useEffect(() => {
    if (geoip.ip) {
      console.log("geoIp");
      Promise.all([
        dispatch(getOsmCityName(+geoip.latitude, +geoip.longitude)),
        dispatch(getCurrentWeather(+geoip.latitude, +geoip.longitude)),
        dispatch(getForecast(+geoip.latitude, +geoip.longitude)),
      ]).then(() => {
        document.title = `Погода`;
        setLoading(false);
      });
    } else if (geo.lat !== 0 && geo.log !== 0) {
      console.log("geoNavigate");
      Promise.all([
        dispatch(getOsmCityName(geo.lat, geo.log)),
        dispatch(getCurrentWeather(geo.lat, geo.log)),
        dispatch(getForecast(geo.lat, geo.log)),
      ]).then(() => {
        document.title = `Погода`;
        setLoading(false);
      });
    }
  }, [geoip, geo]);

  const daysWeather = forecast.slice(1, 7);

  if (loading) {
    return (
      <div className={classes.container_loading}>
        <img src={Gear} alt="Loading..." style={{ margin: "auto" }} />
      </div>
    );
  }

  return (
    <>
      <div className={theme.container}>
        <div className={theme.header}>Header</div>
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
