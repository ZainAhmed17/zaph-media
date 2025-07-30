import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>&copy; {new Date().getFullYear()} ZAPH. All rights reserved.</p>
    </footer>
  );
}