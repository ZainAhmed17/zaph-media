"use client";
import React from 'react'
import styles from "./WhatWeDo.module.scss";
import { motion } from "framer-motion";

export default function WhatWeDo()  {

  return (
    <section className={styles.whatWeDo}>
    <h3 className={styles.sectionTitle}>What We Do</h3>
    <div className={styles.services}>
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.icon}>🖥️</div>
        <h4>Tech</h4>
        <p>
          Web & app development, digital tools, and automation solutions for
          modern brands.
        </p>
      </motion.div>
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.icon}>🎶</div>
        <h4>Music</h4>
        <p>
          We manage sound setups, organize performances, and create
          experiences powered by music.
        </p>
      </motion.div>
      <motion.div
        className={styles.card}
        whileHover={{ scale: 1.05 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className={styles.icon}>🎬</div>
        <h4>Media</h4>
        <p>
          Professional video shoots, post-production editing, and creative
          storytelling visuals.
        </p>
      </motion.div>
    </div>
  </section>
  )
}
