import styles from "./chart.module.scss";

const Chart = () => {
  return (
    <div className={styles["chart"]}>
      <h2>TOP-5 popular brands in April 2023</h2>
      <div className={styles["bar"]}>
        <div className={styles["bar__label"]}>Toyota</div>
        <div
          className={`${styles["bar__value"]} ${styles["bar__value--toyota"]}`}
        >
          804
        </div>
      </div>
      <div className={styles["bar"]}>
        <div className={styles["bar__label"]}>Renault</div>
        <div
          className={`${styles["bar__value"]} ${styles["bar__value--renault"]}`}
        >
          543
        </div>
      </div>
      <div className={styles["bar"]}>
        <div className={styles["bar__label"]}>BMW</div>
        <div className={`${styles["bar__value"]} ${styles["bar__value--bmw"]}`}>
          439
        </div>
      </div>
      <div className={styles["bar"]}>
        <div className={styles["bar__label"]}>Volkswagen</div>
        <div className={`${styles["bar__value"]} ${styles["bar__value--vw"]}`}>
          417
        </div>
      </div>
      <div className={styles["bar"]}>
        <div className={styles["bar__label"]}>Skoda</div>
        <div
          className={`${styles["bar__value"]} ${styles["bar__value--skoda"]}`}
        >
          393
        </div>
      </div>
    </div>
  );
};

export default Chart;
