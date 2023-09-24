import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <nav className="absolute justify-between w-[100%] py-6 mb-12 md:mb-20 bg-transparent z-50">
      <div className="container px-4 mx-auto">
        <div className="flex items-center">
          <Link className="hidden lg:inline-block text-lg font-bold" href="/">
            <Image
              className="h-10"
              src="/sonate.png"
              alt=""
              height={60}
              width={40}
            />
          </Link>
          <Link className="inline-block lg:hidden text-lg font-bold" href="/">
            <Image
              className="h-10"
              src="/sonate.png"
              alt=""
              height={60}
              width={40}
            />
          </Link>
          <ul className="hidden lg:flex ml-2 lg:w-auto lg:space-x-14 items-center">
            <li>
              <p className="inline-block text-lg text-orange-500 font-semibold">
                sonate
              </p>
            </li>
          </ul>
          <div className="hidden lg:block ml-auto">
            <div className="flex items-center">
              <a
                className="relative group inline-block py-3 px-4 text-sm font-semibold text-orange-600 hover:text-white border border-gray-300 rounded-md overflow-hidden transition duration-300"
                href="#"
              >
                <div className="absolute top-0 right-full w-full h-full bg-orange-600 transform group-hover:translate-x-full group-hover:scale-102 transition duration-500"></div>
                <span className="relative">Connect Wallet</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
