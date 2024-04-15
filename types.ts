export type MetarObject = {
    raw_text: string;
    raw_parts: string[];
    icao?: string;
    observed?: Date;
    wind?: {
      degrees: number;
      degrees_from?: number;
      degrees_to?: number;
      speed_kts: number;
      speed_mps: number;
      gust_kts: number;
      gust_mps: number;
    };
    visibility?: {
      miles: string;
      miles_float: number;
      meters: string;
      meters_float: number;
    };
    conditions?: { code: string }[];
    clouds?: {
      code: string;
      base_feet_agl: number;
      base_meters_agl: number;
    }[];
    ceiling?: {
      code: string;
      feet_agl: number;
      meters_agl: number;
    };
    temperature?: {
      celsius: number;
      fahrenheit: number;
    };
    dewpoint?: {
      celsius: number;
      fahrenheit: number;
    };
    humidity_percent?: number;
    barometer?: {
      hg: number;
      kpa: number;
      mb: number;
    };
    flight_category: string;
  };
  
  export type CloudType = 'FEW' | 'SCT' | 'BKN' | 'OVC';