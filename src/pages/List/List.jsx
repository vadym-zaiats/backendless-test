import styles from "./list.module.scss";

const List = () => {
  return (
    <div className={styles["list"]}>
      <h1>The most popular cars</h1>
      <ul className={styles["car-list"]}>
        <li>
          <span className={styles["car-name"]}>Toyota Corolla</span>
          <span className={styles["car-sales"]}> - 1,000,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Ford F-Series</span>
          <span className={styles["car-sales"]}> - 900,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Chevrolet Silverado</span>
          <span className={styles["car-sales"]}> - 800,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Toyota RAV4</span>
          <span className={styles["car-sales"]}> - 700,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Honda Civic</span>
          <span className={styles["car-sales"]}> - 650,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Volkswagen Golf</span>
          <span className={styles["car-sales"]}> - 600,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Nissan Rogue</span>
          <span className={styles["car-sales"]}> - 550,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Honda CR-V</span>
          <span className={styles["car-sales"]}> - 500,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Ford Escape</span>
          <span className={styles["car-sales"]}> - 450,000 sales</span>
        </li>
        <li>
          <span className={styles["car-name"]}>Hyundai Tucson</span>
          <span className={styles["car-sales"]}> - 400,000 sales</span>
        </li>
      </ul>
    </div>
  );
};

export default List;
