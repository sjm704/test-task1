'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './page.module.css';
import { Сountry } from './utils/fetchCountries';

interface CountryListProps {
  initialCountries: Сountry[];
}

export default function CountryList({ initialCountries }: CountryListProps) {
  const [countries, setCountries] = useState<Сountry[]>(initialCountries);

  const handleDelete = (index: number) => {
    setCountries((prev) =>
      prev.map((item, i) =>
        i === index ? { ...item, isRemoving: true } : item
      )
    );
  };

  const removeItem = (index: number) => {
    setCountries((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <ul className={styles.countryList}>
      {countries.map((country, index) => (
        <li
          key={country.iso_code3}
          className={`${styles.countryItem} ${country.isRemoving ? styles.removing : ''}`}
          onAnimationEnd={() => {
            if (country.isRemoving) removeItem(index);
          }}
        >
          <div className={styles.countryContent}>
            <Image
              src={`https:${country.flag_url.replace(/^\/\//, '')}`}
              alt={country.name_ru}
              width={22}
              height={15}
              className={styles.flag}
            />
            <div className={styles.countryName}>{country.name_ru}</div>
            <div className={styles.buttonWrapper}>
              <button 
                className={styles.removeButton}
                onClick={() => handleDelete(index)}
              >
                Удалить
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
