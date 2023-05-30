import { Poppins } from "next/font/google";
import "../globals.css";

export const metadata = {
  title: "Hostville",
  description: "Hostville Clone",
};

const font = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}
