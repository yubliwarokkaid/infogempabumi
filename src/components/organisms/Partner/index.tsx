import { PartnerItem } from "@/components";

export default function Partner() {
  return (
    <section className="bg-slate-100 py-20 dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="mb-4 flex flex-wrap items-center justify-center">
          <h2 className="text-base font-medium tracking-wide text-slate-800 dark:text-slate-100">
            Thanks to Supported by:
          </h2>
        </div>
        <PartnerItem />
      </div>
    </section>
  );
}
