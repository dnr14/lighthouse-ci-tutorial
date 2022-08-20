import { useEffect, useRef } from "react";
import styles from "../styles.module.css";
import Nav from "../components/Nav";

function Main() {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const { current } = ref;
    if (current) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle(`${styles.visible}`, entry.isIntersecting);
          if (entry.isIntersecting) observer.unobserve(entry.target);
        });
      });

      Array.from(current.children).forEach((el) => {
        observer.observe(el);
      });
    }
  }, []);

  return (
    <main>
      <Nav />
      <ul className={styles.container} ref={ref}>
        <li className={styles.card}>아이템 1</li>
        <li className={styles.card}>아이템 2</li>
        <li className={styles.card}>아이템 3</li>
        <li className={styles.card}>아이템 4</li>
        <li className={styles.card}>아이템 5</li>
        <li className={styles.card}>아이템 6</li>
        <li className={styles.card}>아이템 7</li>
        <li className={styles.card}>아이템 8</li>
        <li className={styles.card}>아이템 9</li>
        <li className={styles.card}>아이템 10</li>
      </ul>
    </main>
  );
}

export default Main;
