import { getTranslateCity } from "../../api/geoCodingFreeWeater";
import {
  getRusTranslateStart,
  setRusTranslateError,
  setRusTranslateSuccess,
} from "../slices/cityRusSlice";
import { AppDispatch } from "../store";

export const getOsmCityName =
  (lat: number, log: number) => async (dispatch: AppDispatch) => {
    try {
      dispatch(getRusTranslateStart());
      const { data } = await getTranslateCity.getOSMCityName(lat, log);
      if (!data) {
        throw new Error("Данные не получены");
      }
      dispatch(setRusTranslateSuccess(data));
    } catch (e) {
      dispatch(setRusTranslateError((e as Error).message));
    }
  };
