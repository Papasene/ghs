import { Bai_Jamjuree, Slackey } from "@next/font/google";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowDropdown } from "react-icons/io";
import { TbLanguageHiragana, TbLogin } from "react-icons/tb";
import { TiUserAdd } from "react-icons/ti";
import icontravel from "../../../public/icontravel.png";
import MenuItem from "./menuItem";

const jam = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const ff = Slackey({
  subsets: ["latin"],
  weight: "400",
});

const Header = () => {
  return (
    <div className="h-auto bg-white w-full ">
      <div className="flex justify-between mx-2 max-w-7xl sm:mx-auto items-center px-4">
        <div className="">
          <Link href="/">
            <h2 className="flex justify-between items-center">
              <span className="py-1">
                <Image src={icontravel} alt="logo" width={50} height={40} />
              </span>

              <div className="flex flex-col flex-1">
                <span
                  className={`font-bold py-1 rounded-lg text-lg ${ff.className}`}
                >
                  GpHub
                </span>
                <span
                  className={`flex justify-end text-base font-semibold ${jam.className} `}
                >
                  {" "}
                  Envois de colis, suivis et livraisons en toute simplicité .
                </span>
              </div>
            </h2>
          </Link>
        </div>

        <div className="flex ">
          <div className="flex justify-between items-center mx-2">
            <TbLanguageHiragana />
            <MenuItem
              title="Francais-Sn"
              address="/"
              icon="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            />
            <IoIosArrowDropdown />
          </div>

          <div className="flex justify-between items-center mx-2">
            <TbLogin />
            <MenuItem
              title="Se connecter"
              address="/"
              icon="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            />
          </div>

          <div className="flex justify-between items-center mx-2">
            <TiUserAdd />
            <MenuItem
              title="Créer un compte"
              address="/"
              icon="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
