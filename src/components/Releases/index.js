import styles from "./Releases.module.scss";
import Carrossel from "./Carrossel";
import BoxDisplayBook from "./BoxDisplayBook";
export default function Releases() {
  return (
    <section className={styles.releases}>
      <h2 className={styles.titulo}>Últimos Lançamentos</h2>
      <div className={styles.container}>
        <Carrossel />
        <BoxDisplayBook />
      </div>
    </section>
  );
}
