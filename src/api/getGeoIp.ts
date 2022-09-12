import axios, { AxiosResponse } from "axios";
import { IGeoIp } from "../store/types";

const URL = "https://get.geojs.io/v1/ip/geo.json";

export const getGeoIpApi = {
  getGeo: async (): Promise<AxiosResponse<IGeoIp>> => {
    const response = await axios.get(URL);
    return response;
  },
};
