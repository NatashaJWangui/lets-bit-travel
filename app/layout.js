import {Roboto_Slab} from "next/font/google";
import "./globals.css";
import 'react-multi-carousel/lib/styles.css';
import Provider from "./Provider";
import "react-toastify/dist/ReactToastify.css";

const robotoSlab = Roboto_Slab({
  subsets: ["latin"],
  weight: ["300","400","500","600","700","800"],
});


export const metadata = {
  title: "Lets Bit Travel",
  description: "Make travelling a hobby",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${robotoSlab.className}`}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
}
