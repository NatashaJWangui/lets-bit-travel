import {Roboto_Slab} from "next/font/google";
import "./globals.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],

});


export const metadata = {
  title: "Lets Bit Travel",
  description: "Make travelling a hobby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={robotoSlab.className}>
        {children}
      </body>
    </html>
  );
}
