'use client';

import Image from "next/image";
import styles from "./page.module.css";
import Header from "./components/js/Header";
import Head from "next/head";
import PartnerList from "./components/js/PartnersList";
import  {useEasterEgg} from '../app/hooks/useEasterEgg';
import Projects from "./components/js/Projects";

export default function Home() {
  useEasterEgg();
  return (
    <body>
      <Head>
        <meta name="description" content="Amber Aspeslagh - Product Developer Portfolio" />
        <meta name="keywords" content="Amber Aspeslagh, Product Developer, Portfolio, Web Development, Design." />
        <meta name="author" content="Amber Aspeslagh" />
        <meta name="robots" content="index, follow" />
        <title>Amber Aspeslagh | Product Developer Portfolio</title>
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Amber Aspeslagh",
              "url": "https://amberaspeslagh.be",
              "description": "Product Developer Portfolio",
              "sameAs": [
                "https://www.linkedin.com/in/amber-aspeslagh-66bb1617a/",
                "https://www.instagram.com/amber_aspeslagh/",
                "https://www.behance.net/amberaspeslagh1",
                "https://www.pinterest.com/amberaspeslagh/"
              ]
            }
          `}
        </script>
      </Head>
      <noscript>
        <iframe
          src="https://www.googletagmanager.com/ns.html?id=GTM-PK7M3W83"
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
          title="Google Tag Manager"
        />
      </noscript>
      <Header/>
      <main>
      <PartnerList/>
      <h1 className="main-title">What I did</h1>
      <Projects/>
      </main>
      </body>
  );
}