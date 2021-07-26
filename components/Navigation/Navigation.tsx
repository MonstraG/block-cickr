import Link from "next/link";
import { FC } from "react";
import styles from "./Navigation.module.scss";

const Navigation: FC = () => (
  <nav className={styles.root}>
    <div className={styles.currLogo}>¤</div>
    <div className={styles.right}>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  </nav>
);

export default Navigation;
