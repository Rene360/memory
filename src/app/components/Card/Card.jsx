import styles from "./Card.module.css";

export function Card({ spinCard, handleCardClick, cardData }) {
  return (
    <div
      className={styles.card}
      onClick={() =>
        !cardData.flipped && !spinCard && handleCardClick(cardData)
      }
    >
      <div
        className={`${styles.card__inner} ${
          cardData.flipped && styles.card__flipped
        }`}
      >
        <div className={styles.card__front}></div>
        <img
          src={cardData.cardImage}
          alt="Card"
          className={styles.card__back}
        />
      </div>
    </div>
  );
}
