import styles from "./../css/navigation.css";

export default function Navigation() {
    return (
      <nav>
        <ul className="navigation_list">
          <li className="list_item--home"><a>👋</a></li>
          <li className="list_item--projects"><a>My projects</a></li>
          <li className="list_item--contact"><a>Contact me</a></li>
        </ul>
      </nav>
    );
  }