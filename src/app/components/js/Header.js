import styles from "./../css/header.css";
import Navigation from "../js/navigation";
import Image from "next/image";

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
      </header>
    );
  }