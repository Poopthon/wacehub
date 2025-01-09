"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import styles from "../styles/home.module.css";
import { FaYoutube, FaGithub, FaChevronDown } from "react-icons/fa";

export default function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowScrollIcon(false);
      } else {
        setShowScrollIcon(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Wacehub</title>
        <meta name="description" content="Hello!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Wace
          <br />
          Hub
        </h1>

        <p className={styles.description}>
          Your home for everything Wace.
          <br />
        </p>

        <div className="flex sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium">
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://github.com/Poopthon/wacehub"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub <FaGithub />
          </a>

          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
            href="https://www.youtube.com/channel/UCwt78lxMRd5q1rLpKeZwCTQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            YouTube <FaYoutube className="text-red-500" />
          </a>
        </div>

        {showScrollIcon && (
          <div className={styles.scrollIcon}>
            <FaChevronDown />
          </div>
        )}
      </main>
    </div>
  );
}
