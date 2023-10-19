import Head from 'next/head'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useState} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Image from "next/image";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });


const dataJson = [
  {
    date: "01/01/1801",
    text: "Un nouveau siècle commence."
  },
  {
    date: "02/02/1802",
    text: "Une date historique."
  },
  {
    date: "03/03/1803",
    text: "Encore une journée dans le passé."
  },
  {
    date: "04/04/1804",
    text: "Un autre jour du XIXe siècle."
  },
  {
    date: "05/05/1805",
    text: "L'histoire continue de s'écrire."
  },
  {
    date: "06/06/1806",
    text: "Les temps changent, mais les dates restent."
  },
  {
    date: "07/07/1807",
    text: "Une année du XIXe siècle."
  },
  {
    date: "08/08/1808",
    text: "Une époque bien différente de la nôtre."
  },
  {
    date: "09/09/1809",
    text: "Le passé est toujours présent dans les dates."
  },
  {
    date: "10/10/2021",
    text: "Une date en 2021, une année marquante."
  }
]

export default function Home() {

  const [startDate, setStartDate] = useState(new Date());

  const text = dataJson.find((data) => data.date.substring(6, 10) === startDate.toLocaleDateString().substring(6,10))?.text

  return (
    <>
      <Head>
        <title>Emile magique</title>
        <meta name="description" content="lol" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <main className={styles.main}>
        <div className={styles.center}>

          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>

          <p>{text}</p>

        </div>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Docs <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Find in-depth information about Next.js features and&nbsp;API.</p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Templates <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Discover and deploy boilerplate example Next.js&nbsp;projects.</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Deploy <span>-&gt;</span>
            </h2>
            <p className={inter.className}>Instantly deploy your Next.js site to a shareable URL with&nbsp;Vercel.</p>
          </a>
        </div>
      </main>
    </>
  );
}
