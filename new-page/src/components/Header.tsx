import { Logo } from "./Logo";
import { SearchBar } from "./EmailInput";
import styles from "./Header.module.css";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`wrapper ${styles.inner}`}>
        <Logo />
        <SearchBar />
      </div>
    </header>
  );
};
