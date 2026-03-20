import styles from "./EmailInput.module.css";

export const EmailInput = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <input
        className={styles.input}
        type="email"
        placeholder="Email me when Neon launches..."
      />
      <button className={styles.button} type="submit" aria-label="Subscribe">
        ✉️
      </button>
    </form>
  );
};
