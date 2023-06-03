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
import { Poppins, Nunito } from "next/font/google";

export const metadata = {
  title: "Hostville",
  description: "Hostville",
};

const nunito = Nunito({
  subsets: ["latin"],
});

export default async function Layout({ children }) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en" className={nunito.className}>
      <body>
        <ClientOnly currentUser={currentUser}>
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
