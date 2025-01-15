'use client';

import styles from "./../css/header.css";
import Navigation from "./navigation";
import Image from "next/image";
import Button from "./Button.js";
import { useEffect, useState } from 'react';

export default function Header() {
  /*const [fontSize, setFontSize] = useState("45px"); 
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const scrollFunction = () => {
      if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        setFontSize("35px"); 
        setOpacity(0);
      } else {
        setFontSize("45px");
        setOpacity(1);
      }
    };

   window.addEventListener('scroll', scrollFunction);

   return () => {
      window.removeEventListener('scroll', scrollFunction);
    };
  }, [])*/; 
    return (
      <header className="header">
         <Navigation/>
        <div className="profile_container">
        <Image
        style={{/* 
          opacity, 
          transition: 'opacity 0.3s ease' */}}
        className="profile_image"
         src="/profile.webp"
         layout="responsive"
            width={100}
            height={100}
            alt="Picture of Amber Aspeslagh"
        />
        <p className="profile_message">Hello 👋</p>
        </div>
        <div className="header_containter">
        <h1 className="header_container--title" style={{ /*
        fontSize, 
        transition: 'font-size 0.3s ease' */}}>I'm a product <span className="switch-word">developer</span> <span className="display-none">Amber Aspeslagh</span></h1>
        <p className="header_container--subtitle">I design, I develop, I deliver</p>
        <Button/>
        </div>
      </header>
    );
  }