import { useEffect, useState } from "react";

export default function TopBar() {
  const fullDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let localtime = new Date().toLocaleTimeString("id-ID", {
    timeStyle: "long",
  });

  const [ctime, setCtime] = useState(localtime);

  useEffect(() => {
    const updateTime = () => {
      let localtime = new Date().toLocaleTimeString("id-ID", {
        timeStyle: "long",
      });
      setCtime(localtime);
    };

    setInterval(updateTime);
  }, [1000]);

  return (
    <section className="sticky left-0 top-0 mb-10 w-full bg-gradient-to-t from-slate-800 to-slate-900 py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-between">
          <p className="text-xs uppercase tracking-wide text-slate-100">
            Hari ini,&nbsp;
            {fullDate}
          </p>
          <div className="flex items-center justify-between">
            <p className="hidden text-xs uppercase tracking-wider text-slate-100 antialiased sm:block">
              Standar Waktu Indonesia&nbsp;&nbsp;
            </p>
            <span className="font-time">{ctime}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
