
export const metadata = {
  title: "Skinstric | Introduction",
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

/* Introduction Page Layout */
export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link
            rel="icon"
            href="https://skinstric-nine.vercel.app/img/favicon/favicon-16x16.png"
            type="image/png"
          />
        </head>
        <body>{children}</body>
      </html>
    </>
  );
}
