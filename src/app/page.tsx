// File: /src/app/page.tsx
import HeroSection from '@/components/hero-section/heroSection';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <HeroSection />
    </div>
  );
}
