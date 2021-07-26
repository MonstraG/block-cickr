import Head from "next/head";
import Navigation from "~/components/Navigation/Navigation";
import { FC } from "react";
import styles from "./Layout.module.scss";

type Props = {
  header?: string;
  title?: string;
};

const Layout: FC<Props> = ({ header, title, children }) => (
  <div className={styles.page}>
    <Head>
      <title>{title}</title>
    </Head>
    <Navigation />
    <main className={styles.main}>
      {header && (
        <header className={styles.header}>
          <h1 className={styles.title}>{header}</h1>
        </header>
      )}
      <section className={styles.pageBody}>{children}</section>
    </main>
  </div>
);

export default Layout;
