"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import styles from "./Hero.module.css";
import Skills from "./Skills";
import MyJourny from "./MyJourny";
import Link from "next/link";

export default function Hero() {
  const roles = [
    "Front-End Developer",
    "React & Next.js Developer",
    "UI/UX Enthusiast",
  ];
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = roles[index % roles.length];
    let speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) => {
        if (!isDeleting) {
          const next = current.substring(0, prev.length + 1);
          if (next === current) {
            setTimeout(() => setIsDeleting(true), 1000);
          }
          return next;
        } else {
          const next = current.substring(0, prev.length - 1);
          if (next === "") {
            setIsDeleting(false);
            setIndex((i) => i + 1);
          }
          return next;
        }
      });
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, roles]);

  return (
    <div className={styles.hero}>
      {/* Glow Effects */}
      <div className={styles.glowTopLeft} />
      <div className={styles.glowBottomRight} />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className={styles.content}
      >
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={styles.title}
        >
          Hi<span className={styles.highlight}> Im Pantea</span>
        </motion.h1>

        <motion.p className={styles.roleText}>
          {text}

          <span className={styles.cursor} />
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className={styles.description}
        >
          I build modern, responsive, and user-friendly web applications using
          React and Next.js.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className={styles.buttons}
        >
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <Skills />
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <MyJourny />
        </motion.div>

        <button className={styles.primaryBtn}>دیدن پروژه‌ها</button>
        <Link href="/contact" className={styles.secondaryBtn}>
          ارتباط با من
        </Link>
      </motion.div>
    </div>
  );
}
