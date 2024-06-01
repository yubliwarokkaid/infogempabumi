import Image from "next/image";
import Link from "next/link";
import { IoHome } from "react-icons/io5";

export default function PageNotFoundItem() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div>
        <Image
          src="/icon/404.svg"
          width={500}
          height={500}
          alt="Page not Found"
          className="h-full w-full"
        />
        <div className="mt-10 flex justify-center">
          <Link href="/" className="btn-home">
            <p>
              <IoHome className="mr-1" />
            </p>
            <span>Kembali ke Beranda</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
