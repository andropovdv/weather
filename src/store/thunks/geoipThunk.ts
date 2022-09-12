import {
  getGeoipStart,
  setGeoipError,
  setGeoipSuccess,
} from "../slices/geoipSlice";
import { AppDispatch } from "../store";
import { getGeoIpApi } from "../../api/getGeoIp";

export const getGeoIP = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(getGeoipStart());
    const { data } = await getGeoIpApi.getGeo();
    if (!data) {
      throw new Error("Данные не получены");
    }
    dispatch(setGeoipSuccess(data));
  } catch (e) {
    dispatch(setGeoipError((e as Error).message));
  }
};
