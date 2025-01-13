import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">  
    <head>
    <link rel="preconnect" href="https://stijndv.com" />
    <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" /> <title>Amber Aspeslagh | Product Developer Portfolio</title>
        <meta name="description" content="Hello 👋, I’m Amber Aspeslagh, a digital creative blending creative coding, UX/UI design, and analytical thinking to craft intuitive and engaging digital experiences with a twist." />
        <meta name="keywords" content="Amber Aspeslagh, Product Developer, Portfolio, Product Design, Development, amberaspeslagh, Amber, Aspeslagh" />
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
