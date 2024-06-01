import Link from "next/link";

export default function MenuLinks() {
  return (
    <nav
      id="nav-menu"
      className="absolute right-4 top-full hidden w-full max-w-[250px] rounded-lg bg-slate-100 py-2 shadow-lg duration-300 focus:transition-all dark:bg-slate-800 lg:static lg:block lg:max-w-full lg:rounded-none lg:bg-transparent lg:shadow-none dark:lg:bg-transparent"
    >
      <ul className="block lg:flex">
        <li className="group">
          <Link href="/">
            <div className="menu-link mx-4">Beranda</div>
          </Link>
        </li>
        <li className="group">
          <Link href="/gempabumi-terkini">
            <div className="menu-link mx-4">Gempabumi Terkini (M ≥ 5.0)</div>
          </Link>
        </li>
        <li className="group">
          <Link href="/gempabumi-dirasakan">
            <div className="menu-link mx-4">Gempabumi Dirasakan</div>
          </Link>
        </li>
        <li className="group">
          <Link href="#cuaca-terkini">
            <div className="menu-link ml-4">Cuaca Terkini</div>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
