//import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PersonalBest } from "../types/types";

export default function WrPb() {
  const apiUrl =
    "https://www.speedrun.com/api/v1/users/18vkrd5j/personal-bests?embed=game,category&top=3";
  const {
    isPending,
    error,
    data: pbs,
  } = useQuery({
    queryKey: ["wrpbData"],
    queryFn: async () => {
      const res = await fetch(apiUrl);
      const dataRes = await res.json();
      const dataSortedByGame = dataRes.data.sort(
        (a: PersonalBest, b: PersonalBest) =>
          a.run.game.localeCompare(b.run.game)
      );
      const groupedByGame: PersonalBest[][] = [];
      for (let i = 0; i < dataSortedByGame.length; i++) {
        const obj = dataSortedByGame[i];
        const gameId = obj.run.game;
        groupedByGame[gameId] = groupedByGame[gameId] || [];
        groupedByGame[gameId].push(obj);
      }

      return Object.values(groupedByGame);
    },
  });

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <p className="text-2xl text-third text-center border-2 border-fourth">
        Don't worry about the styling and everything here yet. Still just
        figuring out the speedrun.com api
      </p>
      <div className="py-2" />
      {pbs.map((pb) => (
        <div key={pb[0].run.game} className="border-2 border-fifth">
          <p className="text-third">{pb[0].game.data.names.international}</p>
          {pb
            .sort((a, b) => a.place - b.place)
            .map((run) => (
              <p key={run.run.id}>
                {run.place} - {run.category.data.name} - {run.run.times.primary}
              </p>
            ))}
        </div>
      ))}
    </div>
  );
}
