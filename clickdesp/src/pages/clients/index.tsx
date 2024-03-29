import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "../users/styles.module.scss";
import Heading from "@/components/Heading";
import Layout from "@/components/Layout";
import { CardPess } from "@/components/UI/CardPess";

const inter = Inter({ subsets: ["latin"] });

export default function Clients() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.salutation}>
            <Heading title="Olá! 👨‍💼" subtitle="confira seus Clientes." />
          </div>
          <div className={styles.filter}>
            <span>+</span>
          </div>
        </div>
        <div className={styles.body}>
          <h1>Clientes cadastrados</h1>
          <CardPess name="Marcelo Albero Alves" role="Programador Jr" />
          <CardPess name="Fabio José" role="Programador Sênior" />
          <CardPess name="Fabio José" role="Programador Sênior" />
          <CardPess name="Fabio José" role="Programador Sênior" />
          <CardPess name="Fabio José" role="Programador Sênior" />
          <CardPess name="Fabio José" role="Programador Sênior" />
        </div>
      </main>
    </Layout>
  );
}
