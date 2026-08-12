import NavBar from "@/components/header/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = {
  title: "Ambrose Mbithi — Software Engineer & AI/ML Integration Specialist",
  description:
    "Portfolio of Ambrose Mbithi, a full-stack software engineer specializing in AI/ML integration, LLM-powered workflows, and scalable cloud applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="icon" href="/ambro.jpeg" />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if(localStorage.getItem('theme')!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}",
          }}
        />
      </head>
      <body className="font-sans">
        <div className="relative mx-auto flex min-h-screen max-w-5xl flex-col px-6">
          <NavBar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
