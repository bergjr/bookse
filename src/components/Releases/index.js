import styles from "./Releases.module.scss";
import Carrossel from "./Carrossel";
import BoxDisplayBook from "./BoxDisplayBook";
export default function Releases({title = 'Últimos Lançamentos'}) {
  return (
    <section className={styles.releases}>
      <h2 className={styles.titulo}>{title}</h2>
      <div className={styles.container}>
        <Carrossel />
        <BoxDisplayBook />
      </div>
    </section>
  );
}
