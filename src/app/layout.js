import "./globals.css";


export const metadata = {
  title: "Amber Aspeslagh | Product Developer, Designer, Researcher Portfolio",
  description: "Discover Amber Aspeslagh's expertise in product development. I design innovative solutions, develop cutting-edge products, and deliver exceptional results.",
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
