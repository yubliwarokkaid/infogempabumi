export interface ProvinceTypes {
  id: string;
  name: string;
}

export interface IssueTypes {
  timestamp: string;
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  second: string;
}

export interface EarthquakeTypes {
  Tanggal: string;
  Jam: string;
  DateTime: string;
  Coordinates: string;
  Lintang: string;
  Bujur: string;
  Magnitude: string;
  Kedalaman: string;
  Wilayah: string;
  Potensi: string;
  Dirasakan: string;
}

export interface AreaTypes {
  id: string;
  latitude: string;
  longitude: string;
  coordinate: string;
  type: string;
  region: null;
  level: string;
  description: string;
  domain: string;
  tags: string;
  parameter: ParamsTypes[];
}

export interface ForecastTypes {
  domain: string;
  timestamp: string;
  area: AreaTypes[];
}

export interface ParamsTypes {
  description: string;
  timerange: TimerTypes[];
}

export interface TimerTypes {
  type: string;
  day: string;
  datetime: string;
  celcius: string;
  fahrenheit: string;
  value: string;
}

export interface ValueTypes {
  unit: string;
  text: string;
}
