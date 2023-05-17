import { Inter } from "next/font/google";
import Image from "next/image";
import gphubhome from "../../public/back.png";
import { SideBar, TabSearch } from "./component";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <div className="w-full h-full border border-red-600 bg-white">
        {/* Relative Parent  */}
        <div
          id="between"
          className="w-full h-full flex justify-between max-w-7xl sm:mx-auto bg-gray-100 rounded-lg relative shadow-2xl shadow-blue-700"
        >
          {/* Static Parent  */}
          <div className="static">
            <Image src={gphubhome} alt="Picture of the author" className="" />
          </div>
          {/* Absolute Child */}
          <div className="absolute top-80 left-28">
            <TabSearch />
          </div>{" "}
        </div>

        <div className="w-12 h-full bg-red-500">
          <SideBar />
        </div>
      </div>
    </RootLayout>
  );
}
