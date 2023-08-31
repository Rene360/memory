import GameBoard from "../components/GameBoard/GameBoard";

const IMAGES_URL =
  "https://fed-team.modyo.cloud/api/content/spaces/animals/types/game/entries?per_page=20";

const fetchImages = () => {
  return fetch(IMAGES_URL).then((res) => res.json());
};

export default async function GameBoardPage() {
  const gameImages = [];
  const getImages = await fetchImages();
  getImages.entries.map((image) => gameImages.push(image.fields.image.url));

  return <GameBoard images={gameImages} />;
}
