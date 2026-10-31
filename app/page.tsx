"use client";

import { useState, type FormEvent } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setGreeting(`Hello, ${name.trim() || "tester"}!`);
  }

  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <p className={styles.eyebrow}>NEXT.JS STARTER</p>
        <h1>Testing playground</h1>
        <p className={styles.description}>
          A tiny app for trying out the development server and basic UI
          interactions.
        </p>
      </header>

      <section className={styles.card} aria-labelledby="counter-title">
        <h2 id="counter-title">Counter</h2>
        <p className={styles.count} aria-live="polite">
          {count}
        </p>
        <div className={styles.actions}>
          <button type="button" onClick={() => setCount((value) => value - 1)}>
            Decrease
          </button>
          <button type="button" onClick={() => setCount((value) => value + 1)}>
            Increase
          </button>
          <button
            className={styles.secondaryButton}
            type="button"
            onClick={() => setCount(0)}
          >
            Reset
          </button>
        </div>
      </section>

      <section className={styles.card} aria-labelledby="form-title">
        <h2 id="form-title">Try a form</h2>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label htmlFor="name">Your name</label>
          <div className={styles.formRow}>
            <input
              id="name"
              name="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Enter a name"
            />
            <button type="submit">Say hello</button>
          </div>
        </form>
        {greeting && (
          <p className={styles.greeting} role="status">
            {greeting}
          </p>
        )}
      </section>

      <footer className={styles.footer}>
        Edit <code>app/page.tsx</code> to make this page your own.
      </footer>
    </main>
  );
}
