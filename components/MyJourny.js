import React from "react";
import styles from "./MyJourny.module.css";
function MyJourny() {
  const journeyData = [
    {
      year: "2023",
      title: "Started Learning",
      desc: "JavaScript & Web Development",
    },
    {
      year: "2024",
      title: "Frontend Development",
      desc: "React & Next.js",
    },
    {
      year: "2025",
      title: "Building Projects",
      desc: "Portfolio & Real Projects",
    },
    {
      year: "2026",
      title: "AI Journey",
      desc: "AI & Modern Web Apps",
    },
  ];
  return (
    <section className={styles.journey}>
      <h2>My Journey</h2>

      <div className={styles.timeline}>
        {journeyData.map((item, index) => (
          <div key={index} className={styles.step}>
            <div className={styles.dot}></div>

            <span className={styles.year}>{item.year}</span>

            <h4>{item.title}</h4>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyJourny;
