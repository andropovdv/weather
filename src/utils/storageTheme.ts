import { ITheme, Theme } from "../theme/types";

export const setThemeLS = (key: string, value: ITheme) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const setCurrentTheme = (key: string, value: Theme) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getThemeLS = (key: string) => {
  const value = localStorage.getItem(key);
  let res: ITheme;
  if (value) {
    res = JSON.parse(value);
    return res;
  }
};

export const getCurrentTheme = (key: string) => {
  const value = localStorage.getItem(key);
  let res: Theme;
  if (value) {
    res = JSON.parse(value);
    return res;
  }
};
