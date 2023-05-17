import { Bai_Jamjuree } from "@next/font/google";
const jam = Bai_Jamjuree({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const Footer = () => {
  return (
    <div className="w-full h-full bg-dark" id="footer">
      <div
        className={`flex justify-between ${jam.className} max-w-7xl sm:mx-auto items-center `}
      >
        <div className=" w-full ">
          <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
            <div className="text-center">
              <h2
                className={`mb-6 text-sm font-bold text-blue-900 dark:text-blue-900 uppercase `}
              >
                Company
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="#" className=" hover:underline">
                    About
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h2
                className={`mb-6 text-sm font-bold text-blue-900 dark:text-blue-900 uppercase `}
              >
                HELP CENTER
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Twitter
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h2
                className={`mb-6 text-sm font-bold text-blue-900 dark:text-blue-900 uppercase`}
              >
                Legal
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h2
                className={`mb-6 text-sm font-bold text-blue-900 dark:text-blue-900 uppercase`}
              >
                Download
              </h2>
              <ul className="text-white dark:text-white font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    iOS
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
