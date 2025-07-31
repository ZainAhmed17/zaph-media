"use client";

import styles from "./heroSection.module.scss";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import WhatWeDo from "../what-we-do/WhatWeDo";

export default function HeroSection() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const glow = glowRef.current;
    let requestId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (glow) {
        requestId = requestAnimationFrame(() => {
          glow.style.left = `${e.clientX}px`;
          glow.style.top = `${e.clientY}px`;

          if (glow.style.opacity !== "1") {
            glow.style.opacity = "1";
          }
        });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestId);
    };
  }, []);

  return (
    <>
      <div ref={glowRef} className={styles.movingGlow} />
      <div className={styles.background} />

      <section className={styles.hero}>
        <motion.div
          className={styles.intro}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="/images/zaph-main.jpg"
            alt="ZAPH"
            width={200}
            height={200}
            style={{ objectFit: "contain" }}
          />
        </motion.div>

        <motion.h2
          className={styles.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Tech. Music. Media.
        </motion.h2>

        <motion.p
          className={styles.subtitle}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          We create digital experiences, manage events, and capture stories
          through the lens.
        </motion.p>

        <motion.div
          className={styles.buttons}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <a href="/work" className={styles.primaryBtn}>
            See Our Work
          </a>
          <a href="/about" className={styles.secondaryBtn}>
            Meet Us
          </a>
        </motion.div>
      </section>
      <WhatWeDo />
    </>
  );
}
