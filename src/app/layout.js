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
        
        <script
            dangerouslySetInnerHTML={{
              __html: `
                (function(w,d,s,l,i){
                  w[l]=w[l]||[];
                  w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});
                  var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                  j.async=true;
                  j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
                  f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','GTM-TNB2MXN7');
              `,
            }}
          />
  </head>
        {children}
    </html>
  );
}
