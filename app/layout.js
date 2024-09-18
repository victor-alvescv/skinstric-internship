import Head from "next/head";
import "./globals.css";

export const metadata = {
  title: "Skinstric | Home",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head></Head>
      <body>{children}</body>
    </html>
  );
}
