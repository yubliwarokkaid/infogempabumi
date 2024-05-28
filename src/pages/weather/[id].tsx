import { WeatherDetailItem } from "@/components";
import LayoutRoot from "@/layouts";
import { getWeatherAreaParams } from "@/services/data_api";
import { ParamsTypes, TimerTypes } from "@/services/data_types";

export interface WeatherProps {
  weathers: ParamsTypes;
}

export default function Weather(props: WeatherProps) {
  const { weathers } = props;

  return (
    <LayoutRoot>
      <WeatherDetailItem weathers={weathers} />
    </LayoutRoot>
  );
}

interface GetStaticProps {
  params: {
    id: string;
  };
}

export async function getServerSideProps({ params }: GetStaticProps) {
  const { id } = params;

  const weathers: any = await getWeatherAreaParams();

  return {
    props: {
      weathers: weathers.params,
    },
  };
}
