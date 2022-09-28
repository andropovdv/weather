import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
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
import Gear from "./assets/Gear.svg";
import Brightness from "./assets/brightness.svg";
import {
  ForecastBlock,
  Header,
  Loader,
  TodayWeaterBlock,
  Wrapper,
} from "./sylesComponent/StyledApp";

import { GlobalStyles } from "./theme/globalStyles";
import { useTheme } from "./hooks/useTheme";
import { getThemeLS } from "./utils/storageTheme";
import { Theme } from "./theme/types";

type Props = {};

type geo = {
  lat: number;
  log: number;
};

const App = (props: Props) => {
  const [loading, setLoading] = useState(true);
  const [geo, setGeo] = useState<geo>({ lat: 0, log: 0 });

  const { geoip } = useAppSelector(selectGepIp);
  const { city } = useAppSelector(selectCityRus);
  const { current } = useAppSelector(selectCurrentWeather);
  const { forecast } = useAppSelector(selectForecast);

  const dispatch = useAppDispatch();
  // dispatch(getGeoIP());

  const { theme, themeLoaded, setMode } = useTheme();
  const [selectedTheme, setSelectedTheme] = useState(theme);

  const themeFromStore = getThemeLS("all-themes");

  const changeTheme = () => {
    let newTheme: Theme;
    if (theme.name === "dark") {
      newTheme = themeFromStore?.data["light"]!;
    } else {
      newTheme = themeFromStore?.data["dark"]!;
    }
    setMode(newTheme);
    setSelectedTheme(newTheme);
    console.log("Change theme", theme.name, " ", newTheme.name);
  };

  useEffect(() => {
    setSelectedTheme(theme);
  }, [themeLoaded]);

  useEffect(() => {
    // todo геолокация продумать
    // dispatch(getGeoIP());

    navigator.geolocation.getCurrentPosition(
      (position) => {
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
      <>
        {themeLoaded && (
          <ThemeProvider theme={selectedTheme}>
            <GlobalStyles />
            <Loader>
              <img src={Gear} alt="Loading..." style={{ margin: "auto" }} />
            </Loader>
          </ThemeProvider>
        )}
      </>
    );
  }

  const inLocation = city.address;
  const location =
    inLocation.city ||
    inLocation.town ||
    inLocation.village ||
    inLocation.hamlet ||
    inLocation.isolated_dwellin ||
    inLocation.locality ||
    inLocation.allotments ||
    inLocation.suburb ||
    inLocation.quarter ||
    inLocation.neighbourhood ||
    inLocation.island ||
    inLocation.island;

  return (
    <>
      {themeLoaded && (
        <ThemeProvider theme={selectedTheme}>
          <GlobalStyles />
          <Wrapper>
            <Header>
              {/* <div className={classes.header}> */}
              <a href="https://open-meteo.com">open-meteo.com</a>
              <img src={Brightness} alt="theme" onClick={() => changeTheme()} />
              {/* </div> */}
            </Header>
            <TodayWeaterBlock>
              <TodayWeater
                city={location || "Неопределен"}
                temperature={current.temperature}
                weatherImg={weatherIconSwitch(current.weathercode)}
              />
              <TodayWeaterDetail weatherData={forecast[0] || []} />
            </TodayWeaterBlock>
            <ForecastBlock>
              <Forecast weatherData={daysWeather} />
            </ForecastBlock>
          </Wrapper>
        </ThemeProvider>
      )}
    </>
  );
};

export default App;
