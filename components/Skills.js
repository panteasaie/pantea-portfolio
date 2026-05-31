import styles from "./Skills.module.css";
const skills = [
  { name: "Next.js", icon: "/image/next.png" },
  { name: "React", icon: "/image/react.png" },
  { name: "HTML", icon: "/image/html.png" },
  { name: "CSS", icon: "/image/css.png" },
  { name: "JavaScript", icon: "/image/js.png" },
  { name: "MongoDB", icon: "/image/mongos.png" },

  { name: "Git", icon: "/image/git.png" },
  { name: "GitHub", icon: "/image/github.png" },
];

export default function Skills() {
  return (
    <section className={styles.skills}>
      <h2>Tech stack</h2>

      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <div key={skill.name} className={styles.skillCard}>
            <img src={skill.icon} alt={skill.name} />
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
