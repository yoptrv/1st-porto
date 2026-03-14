import Head from "next/head";
import MainLayout from "@/layouts/MainLayouts";

export default function Profile() {
  return (
    <>
      <Head>
        <title>Dio Adeliya Putra — Software Engineer & AI Enthusiast</title>
        <meta
          name="description"
          content="Portfolio of Dio Adeliya Putra — Software Engineer, AI Enthusiast, and Computer Science Student. Building modern web applications with Next.js, React, and cutting-edge technologies."
        />
        <meta name="author" content="Dio Adeliya Putra" />
        <meta property="og:title" content="Dio Adeliya Putra — Portfolio" />
        <meta
          property="og:description"
          content="Software Engineer & AI Enthusiast — Building modern web applications with Next.js, React, and cutting-edge technologies."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainLayout />
    </>
  );
}
