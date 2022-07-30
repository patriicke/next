import Link from "next/link";
import Head from "next/head";
import styles from "./../styles/Home.module.css";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Next</title>
      </Head>
      <h1 className={styles.header}>Home Page</h1>
    </div>
  );
}
