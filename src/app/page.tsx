import { getServerSideProps } from './utils/fetchCountries';
import CountryList from './CountryList';
import styles from './page.module.css';

export default async function Home() {

  const { props } = await getServerSideProps();

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>Список стран</h1>
      <CountryList initialCountries={props.countries} />
    </div>
  );
}
