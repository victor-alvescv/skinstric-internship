
export const metadata = {
  title: "Skinstric | Welcome",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

/* Welcome Page Layout */
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href='https://skinstric-nine.vercel.app/img/favicon/favicon-16x16.png'
          type="image/png"
        />
      </head>
      <body className="max-lg:overflow-y-scroll max-lg:relative">{children}</body>
    </html>
  );
}
