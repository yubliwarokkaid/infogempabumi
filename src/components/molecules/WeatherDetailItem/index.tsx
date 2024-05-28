import {
  AreaTypes,
  ForecastTypes,
  ParamsTypes,
  TimerTypes,
  ValueTypes,
} from "@/services/data_types";
import Moment from "react-moment";

export interface WeatherDetailItemProps {
  weathers: ParamsTypes;
}

export default function WeatherDetailItem(props: WeatherDetailItemProps) {
  const { weathers } = props;

  const dateToFormat = "1976-04-19T12:59-0500";

  return <div>{weathers.description}</div>;
}
