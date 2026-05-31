"use client";

import { motion } from "framer-motion";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.contact}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className={styles.title}>Contact Me</h2>

        <p className={styles.subtitle}>
          Let's build something amazing together.
        </p>

        <form className={styles.form}>
          <input type="text" placeholder="Your Name" className={styles.input} />

          <input
            type="email"
            placeholder="Your Email"
            className={styles.input}
          />

          <textarea
            rows="5"
            placeholder="Your Message"
            className={styles.textarea}
          />

          <button className={styles.button}>Send Message</button>
        </form>

        <div className={styles.links}>
          <a href="mailto:your@email.com">Email</a>
          <a href="https://github.com/panteasaie">GitHub</a>
          <a href="https://linkedin.com/in/username">LinkedIn</a>
        </div>
      </motion.div>
    </section>
  );
}
