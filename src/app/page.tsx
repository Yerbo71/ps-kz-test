import FormVirtuozzo from '@/components/form/formVirtuozzo';
import styles from './page.module.scss';

export default function Home() {
  return (
    <main className={styles.container}>
      <FormVirtuozzo />
    </main>
  );
}
