import axios, { AxiosResponse } from "axios";
import { ICityName } from "../store/types/IOsmCityName";

const ALT_URL = "https://nominatim.openstreetmap.org/";

export const getTranslateCity = {
  getOSMCityName: async (
    lat: number,
    log: number
  ): Promise<AxiosResponse<ICityName>> => {
    const responce = await axios.get(
      `${ALT_URL}reverse?format=json&lat=${lat}&lon=${log}`
    );
    return responce;
  },
};
