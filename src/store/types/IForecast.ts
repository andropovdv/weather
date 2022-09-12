export interface DailyUnits {
  time: string;
  weathercode: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  apparent_temperature_max: string;
  windspeed_10m_max: string;
  winddirection_10m_dominant: string;
}

export interface Daily {
  time: string[];
  weathercode: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  apparent_temperature_max: number[];
  windspeed_10m_max: number[];
  winddirection_10m_dominant: number[];
  precipitation_sum: number[];
}

export interface Forecast {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  daily_units: DailyUnits;
  daily: Daily;
}

export interface ForecastWork {
  time?: string;
  weathercode: number;
  temperature_2m_max: number;
  temperature_2m_min: number;
  apparent_temperature_max: number;
  windspeed_10m_max: number;
  winddirection_10m_dominant: number;
  precipitation_sum: number;
}
