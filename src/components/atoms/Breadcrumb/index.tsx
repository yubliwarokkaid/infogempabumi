import Link from "next/link";

export interface BreadCrumbProps {
  title: string;
  description: string;
}

export default function BreadCrumb(props: BreadCrumbProps) {
  const { title, description } = props;

  return (
    <section className="bg-sky-50 py-10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-wider text-slate-600">
            {title}
          </h3>
          <div className="flex items-center text-sm font-light text-slate-600">
            <Link
              href="/"
              className="transition-all duration-300 ease-in-out hover:text-sky-500"
            >
              Beranda
            </Link>
            &nbsp;
            <span className="text-xs">/</span>&nbsp;
            <p className="text-sky-500">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
