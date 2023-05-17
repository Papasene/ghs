"use client";
import { SvgIcon } from "@mui/material";
import { Bai_Jamjuree } from "@next/font/google";
import Link from "next/link";
const jam = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const MenuItem = ({
  title,
  address,
  icon,
}: {
  title: string;
  address: string;
  icon: string;
}) => {
  return (
    <div className={` hover:text-blueberry ${jam.className}`}>
      <Link href={address} className="mx-4 lg:mx-6 ">
        <div className="sm:hidden ">
          <SvgIcon className="text-2xl mx-4 border rounded-lg ">
            <path d={icon} />
          </SvgIcon>
        </div>
        <div className="hidden sm:inline my-2">
          <div className="flex justify-between items-center">
            <span className="text:sm mx-1 font-jamjuree text-base font-bold text-gray-700 ">
              {title}
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuItem;
