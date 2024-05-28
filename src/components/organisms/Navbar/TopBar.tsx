import { useEffect, useState } from "react";

export default function TopBar() {
  const fullDate = new Date().toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  let localtime = new Date().toLocaleTimeString("id-ID", {
    timeStyle: "full",
  });

  const [ctime, setCtime] = useState(localtime);

  useEffect(() => {
    const updateTime = () => {
      let localtime = new Date().toLocaleTimeString("id-ID", {
        timeStyle: "full",
      });
      setCtime(localtime);
    };

    setInterval(updateTime);
  }, [1000]);

  return (
    <section className="sticky left-0 top-0 mb-10 w-full bg-slate-800 py-2">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center">
          <span className="font-mono text-xs text-slate-100">
            Hari ini,&nbsp;
            {fullDate}&nbsp;-&nbsp;
          </span>
          <span className="font-mono text-xs uppercase text-slate-100">
            {ctime}
          </span>
        </div>
      </div>
    </section>
  );
}
