import Link from "next/link";
import styles from "./../css/button.css";

export default function Button() {
    const email = "amber.aspeslagh@gmail.com";
    const subject = "I want to work togehter";
    const body = "I wanted to reach out to discuss...";

    return (
        <a href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`} className="button">Let's work together</a>
  );
}