import moment from "moment";
import { useEffect, useState } from "react";

export default function TopBar() {
  let fullDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    timeZoneName: "long",
  });

  const [ctime, setCtime] = useState(fullDate);

  useEffect(() => {
    const updateTime = () => {
      let fullDate = new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        timeZoneName: "long",
      });
      setCtime(fullDate);
    };

    setInterval(updateTime);
  }, [1000]);

  return (
    <section className="sticky mb-10 w-full bg-gradient-to-t from-slate-700 via-slate-800 to-slate-700 py-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase text-slate-100">
            Hari ini&nbsp;
            {ctime}
          </span>
        </div>
      </div>
    </section>
  );
}
