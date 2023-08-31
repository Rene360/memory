import styles from "./Score.module.css";

export function Score({ namePlayer, hits, failed }) {
  return (
    <div className={styles.score}>
      <div className="row">
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h5 className={styles.score__data}>Jugador: {namePlayer}</h5>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h5 className={styles.score__data}>✅ Aciertos: {hits}</h5>
        </div>
        <div className="col-sm-12 col-md-4 col-lg-4">
          <h5 className={styles.score__data}>❌ Errores: {failed}</h5>
        </div>
      </div>
    </div>
  );
}
