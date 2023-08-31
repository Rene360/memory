import styles from "./Board.module.css";
import { Card } from "../Card/Card";

export function Board({ spinCard, handleCardClick, cardsData }) {
  return (
    <div className={styles.board}>
      {cardsData.map((cardData, index) => {
        return (
          <Card
            key={index}
            spinCard={spinCard}
            handleCardClick={handleCardClick}
            cardData={cardData}
          />
        );
      })}
    </div>
  );
}
