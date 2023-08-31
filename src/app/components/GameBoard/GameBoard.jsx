"use client";

import styles from "./GameBoard.module.css";
import { Board } from "../Board/Board";
import { Score } from "../Score/Score";
import { useEffect, useState } from "react";

export default function App({ images }) {
  const [shuffledCards, setShuffledCards] = useState([]);
  const [selectedCard, setselectedCard] = useState(null);
  const [spinCard, setSpinCard] = useState(false);

  const [hits, setHits] = useState(0);
  const [failed, setFailed] = useState(0);
  const [win, setWin] = useState(0);

  const [namePlayer, setNamePlayer] = useState("");

  const getData = () => {
    return localStorage.getItem("name");
  };

  useEffect(() => {
    const cardImages = shuffleImageData([...images, ...images]);
    setShuffledCards(
      cardImages.map((cardImage, i) => ({
        index: i,
        cardImage,
        flipped: false,
      }))
    );
  }, []);

  useEffect(() => {
    setNamePlayer(getData());
  }, []);

  const shuffleImageData = (a) => {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  const handleCardClick = (card) => {
    const flippedCard = { ...card, flipped: true };
    let shuffledCardsCopy = [...shuffledCards];
    shuffledCardsCopy.splice(card.index, 1, flippedCard);

    setShuffledCards(shuffledCardsCopy);

    if (selectedCard === null) {
      setselectedCard(card);
    } else if (selectedCard.cardImage === card.cardImage) {
      setselectedCard(null);

      setHits(hits + 1);
      setWin(win + 1);
    } else {
      setSpinCard(true);
      setTimeout(() => {
        shuffledCardsCopy.splice(card.index, 1, card);
        shuffledCardsCopy.splice(selectedCard.index, 1, selectedCard);
        setShuffledCards(shuffledCardsCopy);
        setselectedCard(null);
        setSpinCard(false);
      }, 1000);

      setFailed(failed + 1);
    }
  };

  return (
    <div className="container">
      <Score namePlayer={namePlayer} hits={hits} failed={failed}></Score>

      {win === 20 && <h2 className={styles.winner}>Ganaste {namePlayer}!!!</h2>}

      <Board
        cardsData={shuffledCards}
        spinCard={spinCard}
        handleCardClick={handleCardClick}
      />
    </div>
  );
}
