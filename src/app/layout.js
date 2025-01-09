import "./globals.css";

export const metadata = {
  title: "Portfolio Amber Aspeslagh",
  description: "I'm a product developer. I design, I develop, I deliver.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    <head>
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
  </head>
        {children}
    </html>
  );
}
