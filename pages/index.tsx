import Head from "next/head";
import styles from "@/styles/Home.module.css";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dates from "../utils/dates.json";
import Image from 'next/image'
import Couv from '../public/image.png'

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
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Alegreya"></link>
      </Head>

      <main className={styles.main}>
          <Image style={{position: 'absolute', left: 150, top: 150}} src={Couv.src} width={271} height={403} />
        <div className={styles.center}>
          <DatePicker
            selected={startDate}
            onChange={date => {
              date !== null && setStartDate(date);
            }}
          />

          {text && <p dangerouslySetInnerHTML={{ __html: text }} />}
          <Image src="/title.svg" alt="title" width={654} height={69} priority />
          <Image src="/text.svg" alt="text" width={650} height={2412} priority />
          <Image src="/footer.svg" alt="footer" width={638} height={24} priority />
        </div>
      </main>
    </>
  );
}
