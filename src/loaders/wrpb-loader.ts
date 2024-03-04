import type { PersonalBest } from "../types/types";

export async function loader() {
  const apiUrl =
    "https://www.speedrun.com/api/v1/users/18vkrd5j/personal-bests?embed=game,category&top=3";
  const res = await fetch(apiUrl);
  const data = await res.json();
  const dataSortedByGame = data.data.sort((a: PersonalBest, b: PersonalBest) =>
    a.run.game.localeCompare(b.run.game)
  );
  const groupedByGame: PersonalBest[][] = [];
  for (let i = 0; i < dataSortedByGame.length; i++) {
    const obj = dataSortedByGame[i];
    const gameId = obj.run.game;
    groupedByGame[gameId] = groupedByGame[gameId] || [];
    groupedByGame[gameId].push(obj);
  }
  console.log(groupedByGame);

  return Object.values(groupedByGame);
}
