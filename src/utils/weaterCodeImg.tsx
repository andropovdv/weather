import clearSky from "../assets/weatherIcon/0.png";
import mainlyClear from "../assets/weatherIcon/1.png";
import partlyCloudy from "../assets/weatherIcon/2.png";
import overCast from "../assets/weatherIcon/3.png";
import fog from "../assets/weatherIcon/45.png";
import drizzele from "../assets/weatherIcon/51.png";
import freezingDrizzle from "../assets/weatherIcon/56.png";
import slightRain from "../assets/weatherIcon/61.png";
import moderateRain from "../assets/weatherIcon/63.png";
import heavyRain from "../assets/weatherIcon/65.png";
import slightSnow from "../assets/weatherIcon/71.png";
import moderateSnow from "../assets/weatherIcon/73.png";
import heavySnow from "../assets/weatherIcon/75.png";
import grains from "../assets/weatherIcon/77.png";
import rainShower from "../assets/weatherIcon/77.png";
import thunderstorm from "../assets/weatherIcon/95.png";

import notAvailable from "../assets/notAvailable.jpeg";

export const weatherIconSwitch = (code: number) => {
  switch (code) {
    case 0:
      return clearSky;
    case 1:
      return mainlyClear;
    case 2:
      return partlyCloudy;
    case 3:
      return overCast;
    case 45:
    case 48: //todo ненашел картинку
      return fog;
    case 51:
    case 53:
    case 55:
      return drizzele;
    case 56:
    case 57:
    case 66:
    case 67:
      return freezingDrizzle;
    case 61:
      return slightRain;
    case 63:
      return moderateRain;
    case 65:
      return heavyRain;
    case 71:
    case 85:
      return slightSnow;
    case 73:
      return moderateSnow;
    case 75:
    case 86:
      return heavySnow;
    case 77:
      return grains;
    case 80:
    case 81:
    case 82:
      return rainShower;
    case 95:
    case 96:
    case 99:
      return thunderstorm;

    default:
      return notAvailable;
  }
};
