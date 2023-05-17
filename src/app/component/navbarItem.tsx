"use client";
// Etant donne qu on utilise un hook, on ne peut l utiliser en server component (hook : useSearchParams)
import { Bai_Jamjuree } from "@next/font/google";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
const jam = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const NavBarItem = ({
  title,
  param,
}: {
  title: string;
  param: string | null;
}) => {
  const searchParams = useSearchParams();
  //Pour afficher les underline
  const genre: string | null = searchParams.get("genre");

  return (
    <div
      className={` 
       ${
         genre &&
         genre === param &&
         "bg-gray-100 border-b-4 border-blueberry rounded-lg"
       }`}
    >
      <Link
        href={`/?genre=${param}`}
        className={`mx-2 hover:text-blueberry text-base text-gray-700 font-semibold ${jam.className}
          
          `}
      >
        {title}
      </Link>
    </div>
  );
};

export default NavBarItem;
