import Head from "next/head";
import Hero from "@/views/Hero";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sonate</title>
        <meta name="description" content="sonate" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  );
}
