import styles from "./../css/header.css";
import Navigation from "../js/Navigation";
import Image from "next/image";
import Button from "./Button.js";

export default function Header() {
    return (
      <header className="header">
         <Navigation/>
        <div className="profile_container">
        <Image
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
        <h1 className="header_container--title">I'm a product <span className="switch-word">developer</span> <span className="display-none">Amber Aspeslagh</span></h1>
        <p className="header_container--subtitle">I design, I develop, I deliver</p>
        <Button/>
        </div>
      </header>
    );
  }