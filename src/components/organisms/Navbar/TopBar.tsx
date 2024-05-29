import { toZonedTime } from "date-fns-tz";
import { useEffect, useState } from "react";

export default function TopBar() {
  const fullDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let utc = new Date();

  const nyDate = toZonedTime(utc, "America/New_York").toLocaleTimeString(
    "id-ID",
    { timeZoneName: "short", timeZone: "utc" },
  );

  let localtime = new Date().toLocaleTimeString("id-ID", {
    timeZoneName: "short",
  });

  const [ctime, setCtime] = useState(localtime);

  useEffect(() => {
    const updateTime = () => {
      let localtime = new Date().toLocaleTimeString("id-ID", {
        timeZoneName: "short",
      });
      setCtime(localtime);
    };

    setInterval(updateTime);
  }, [1000]);

  return (
    <section className="sticky left-0 top-0 mb-10 w-full bg-gradient-to-t from-slate-800 via-slate-900 to-slate-800 py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-slate-100">
            Hari ini,&nbsp;
            {fullDate}
          </p>
          <div className="flex items-center">
            <span className="font-time mr-2">{ctime}</span>
            <span className="font-time mr-2">/</span>
            <span className="font-time">{nyDate}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
