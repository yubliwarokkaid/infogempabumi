import { getWeatherArea } from "@/services/data_api";
import { AreaTypes } from "@/services/data_types";
import { useCallback, useEffect, useState } from "react";

export default function WeatherItem() {
  const [data, setData] = useState([]);

  const getWeatherDataList = useCallback(async () => {
    const response = await getWeatherArea();
    setData(response);
    console.log(response);
  }, [getWeatherArea]);

  useEffect(() => {
    getWeatherDataList();
  }, []);

  return (
    <>
      {data.map((area: AreaTypes) => {
        return (
          <div className="">
            {area.description},&nbsp;{area.domain}
          </div>
        );
      })}
    </>
  );
}
