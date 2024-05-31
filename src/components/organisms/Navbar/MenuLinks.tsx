import Link from "next/link";

export default function MenuLinks() {
  return (
    <nav
      id="nav-menu"
      className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-slate-100 py-2 shadow-lg duration-300 focus:transition-all dark:bg-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none"
    >
      <ul className="block lg:flex">
        <li className="group">
          <Link href="/">
            <div className="mx-4 flex py-2 text-sm uppercase tracking-wider text-slate-800 group-hover:text-sky-500 dark:text-slate-100">
              Beranda
            </div>
          </Link>
        </li>
        <li className="group">
          <Link href="/gempabumi-terkini">
            <div className="mx-4 flex py-2 text-sm uppercase tracking-wider text-slate-800 group-hover:text-sky-500 dark:text-slate-100">
              Gempabumi Terkini (M ≥ 5.0)
            </div>
          </Link>
        </li>
        <li className="group">
          <Link href="/gempabumi-dirasakan">
            <div className="mx-4 flex py-2 text-sm uppercase tracking-wider text-slate-800 group-hover:text-sky-500 dark:text-slate-100">
              Gempabumi Dirasakan
            </div>
          </Link>
        </li>
        <li className="group">
          <Link href="#cuaca-terkini">
            <div className="ml-4 flex py-2 text-sm uppercase tracking-wider text-slate-800 group-hover:text-sky-500 dark:text-slate-100">
              Cuaca Terkini
            </div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
