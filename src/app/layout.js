import { Fira_Code } from "next/font/google";
import "./globals.css";
import './style.css'
import Navbar from "@/components/Navbar";

const inter = Fira_Code({ subsets: ["latin"] });

export const metadata = {
  title: "Priyanshu Chahar | Portfolio",
  description: "Priyanshu Chahar is a skilled MERN stack Developer. Contact Priyanshu for professional web development services and projects.",
  keywords: ["Priyanshu Chahar", "Priyannxhuu", "Priyanshu Chahar Devfolio", "Priyanshu Chahar Portfolio", "NvmeSensor", "Full Stack Developer", "MERN Stack", "Web Development"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
    </html>
  );
}