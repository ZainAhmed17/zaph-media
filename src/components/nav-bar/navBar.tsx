import styles from './navBar.module.scss';
import Image from 'next/image';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
        <Image src="/images/zaph-logo.jpg" alt="ZAPH" width={40} height={40} style={{ objectFit: 'contain' }} />
      <div className={styles.links}>
        <a href="/about">About</a>
        <a href="/work">Work</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
}