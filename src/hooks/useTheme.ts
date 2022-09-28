/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Theme } from "../theme/types";
import {
  getThemeLS,
  setCurrentTheme,
  getCurrentTheme,
} from "../utils/storageTheme";

export const useTheme = () => {
  const themes = getThemeLS("all-themes")!;
  const [theme, setTheme] = useState<Theme>(themes.data.dark);
  const [themeLoaded, setThemeLoaded] = useState(false);

  const setMode = (mode: Theme) => {
    setCurrentTheme("theme", mode);
    setTheme(mode);
  };

  // const getFonts = () => {
  //   const allFonts = _.values(_.mapValues(themes.data, 'font'));
  //   return allFonts;
  // }

  useEffect(() => {
    const localTheme = getCurrentTheme("theme");
    localTheme ? setTheme(localTheme) : setTheme(themes.data.dark);
    setThemeLoaded(true);
  }, []);

  return { theme, themeLoaded, setMode };
};
