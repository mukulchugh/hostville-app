import { Nunito } from "next/font/google";

import Navbar from "@/app/components/navbar/Navbar";
import LoginModal from "@/app/components/modals/LoginModal";
import RegisterModal from "@/app/components/modals/RegisterModal";
import SearchModal from "@/app/components/modals/SearchModal";
import RentModal from "@/app/components/modals/RentModal";

import ToasterProvider from "@/app/providers/ToasterProvider";

import "./globals.css";
import ClientOnly from "./components/ClientOnly";
import getCurrentUser from "./actions/getCurrentUser";
import Footer from "./components/footer";

export const metadata = {
  title: "Hostville",
  description: "Hostville Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={font.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RegisterModal />
          <SearchModal />
          <RentModal />
          <Navbar currentUser={currentUser} />
        </ClientOnly>
        <div className="pb-20 pt-28">{children}</div>
        {/* CTA */}
        {/* <CTASection /> */}
        <ClientOnly>
          <Footer />
        </ClientOnly>
      </body>
    </html>
  );
}

const CTASection = () => {
  return (
    <section className="flex mb-12 ">
      <div className="container mx-auto px-24 rounded-lg bg-yellow-600 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img
              src="https://www.holidify.com/images/bgImages/MANALI.jpg"
              alt="Image"
              className="w-full rounded-lg"
            />
          </div>
          <div
            className="
            flex 
            flex-col
            justify-center
            items-start

          "
          >
            <p className="text-sm text-gray-700">Pre-text</p>
            <h2 className="text-3xl font-bold text-white mt-4">Heading</h2>
            <p className="text-gray-200 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a
              magna sit amet enim lacinia efficitur. Nunc id lorem non ligula
              fermentum rutrum. Sed nec nibh eu est semper semper.
            </p>
            <button className="bg-white text-yellow-500 px-6 py-3 rounded-md mt-6">
              Button
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
