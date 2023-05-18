import { Inter } from "next/font/google";
import Image from "next/image";
import gphubhome from "../../public/back.png";
import { TabSearch } from "./component";
import RootLayout from "./layout";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <RootLayout>
      <div
        className="w-full h-full flex justify-start border border-red-600 bg-gray-100 p-2 "
        id="redbody"
      >
        {/* Relative Parent  */}
        <div
          id="between"
          className="w-5/6 h-full sm:ml-auto flex justify-between max-w-7xl bg-gray-100 rounded-lg relative shadow-2xl shadow-blue-700 border border-amber-400"
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

        <div className="w-1/6 h-full bg-white rounded-lg border border-amber-400"></div>
        <div></div>
      </div>
    </RootLayout>
  );
}
