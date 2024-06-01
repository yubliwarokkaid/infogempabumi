import Link from "next/link";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

export interface BreadCrumbProps {
  title: string;
  description: string;
}

export default function BreadCrumb(props: BreadCrumbProps) {
  const { title, description } = props;

  return (
    <section className="bg-slate-100 py-10 dark:bg-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-center justify-start sm:justify-between">
          <h3 className="text-xl font-semibold tracking-wider text-slate-600 dark:text-slate-100">
            {title}
          </h3>
          <div className="flex items-center text-sm font-light text-slate-600 dark:text-slate-100">
            <Link
              href="/"
              className="transition-all duration-300 ease-in-out hover:text-sky-500"
            >
              Beranda
            </Link>
            <span className="px-2 text-sm">
              <MdKeyboardDoubleArrowRight />
            </span>
            <p className="text-sky-500">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
