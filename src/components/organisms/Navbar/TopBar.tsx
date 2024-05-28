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
    <section className="sticky mb-10 w-full bg-gradient-to-t from-slate-700 via-slate-800 to-slate-700 py-2">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs uppercase text-slate-100">
            Hari ini&nbsp;
            {fullDate}&nbsp;-&nbsp;
            {ctime}
          </span>
        </div>
      </div>
    </section>
  );
}
