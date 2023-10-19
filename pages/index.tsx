import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Link from "next/link";
import dates from "../utils/dates.json";

const inter = Inter({ subsets: ["latin"] });

const dataJson = dates;

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  const text = dataJson.find(
    data => data.date.substring(6, 10) === startDate.toLocaleDateString().substring(6, 10)
  )?.text;

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
          <DatePicker
            selected={startDate}
            onChange={date => {
              date !== null && setStartDate(date);
            }}
          />

          {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
        </div>
      </main>
    </>
  );
}
