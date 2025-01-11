import "./globals.css";


export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    <head>
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" /> <title>Amber Aspeslagh | Product Developer Portfolio</title>
        <meta name="description" content="Discover Amber Aspeslagh's expertise in product development. I design innovative solutions, develop cutting-edge products, and deliver exceptional results." />
        <meta name="keywords" content="Amber Aspeslagh, Product Developer, Portfolio, Product Design, Development" />
        <meta name="author" content="Amber Aspeslagh" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://amberaspeslagh.be" />
  </head>
        {children}
    </html>
  );
}
