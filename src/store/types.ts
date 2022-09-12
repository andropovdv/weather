export interface IGeoIp {
  organization_name: string;
  region: string;
  accuracy: number;
  asn: number;
  organization: string;
  timezone: string;
  longitude: string;
  country_code3: string;
  area_code: string;
  ip: string;
  city: string;
  country: string;
  continent_code: string;
  country_code: string;
  latitude: string;
}

export interface IRusCity {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  ranking: number;
  elevation: number;
  feature_code: string;
  country_code: string;
  admin1_id: number;
  timezone: string;
  population: number;
  country_id: number;
  country: string;
  admin1: string;
}

export interface ITranslateCity {
  results: IRusCity[];
  generationtime_ms: number;
}
