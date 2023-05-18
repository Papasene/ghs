import { Header, Navbar } from "./component";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="w-screen h-screen flex flex-1 flex-col bg-gray-200">
        <div className="w-full h-full flex flex-1 flex-col">
          <div className="w-full h-auto bg-gray-100 flex flex-1 flex-col">
            <Header />
            <Navbar />
          </div>
          <div className="h-full w-full py-2">
            <main className="h-full">{children}</main>
          </div>
          {/* <div className="h-36">
            <Footer />
          </div> */}
        </div>
      </body>
    </html>
  );
}
