import NavBar from "@/components/header/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ambrose Mbithi",
  description: "Ambrose Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/ambro.jpeg" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="container">
            <NavBar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
