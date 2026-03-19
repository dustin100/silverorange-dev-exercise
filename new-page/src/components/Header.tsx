import styles from "./Header.module.css";

interface HeaderProps {
  children: React.ReactNode;
}

export const Header = ({ children }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <div className="wrapper">{children}</div>
    </header>
  );
};
