import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NPage = () => {
  return (
    <div>
      <Head>
        <title>The NextJS App</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.heading}>Reaxt</h1>
        <p>The React Framwork with NextJS, Typescript & Tailwindcss</p>
      </main>

      <footer className={styles.footer}>
        Configured by
        <a href='https://github.com/jstbyte'>Jahid</a>
      </footer>
    </div>
  );
};

export default Home;
