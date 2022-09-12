export interface Address {
  historic: string;
  road: string;
  city_block: string;
  suburb: string;
  city_district: string;
  city: string;
  "ISO3166-2-lvl6": string;
  state: string;
  "ISO3166-2-lvl4": string;
  region: string;
  postcode: string;
  country: string;
  country_code: string;
}

export interface ICityName {
  place_id: number;
  licence: string;
  osm_type: string;
  osm_id: number;
  lat: string;
  lon: string;
  display_name: string;
  address: Address;
  boundingbox: string[];
}
