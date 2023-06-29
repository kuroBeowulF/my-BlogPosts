import MyProfilePic from "./components/MyProfilePic";
import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Kuro's Blog",
  description: "Created by Kurosh Fazli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePic />
        {children}
      </body>
    </html>
  );
}
