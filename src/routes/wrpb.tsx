import { useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import type { PersonalBest } from "../types/types";
import WrPbEntry from "../components/wrpb-entry";

export default function WrPb() {
  const scrollBoxRef = useRef<HTMLDivElement>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [currentMousePos, setCurrentMousePos] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

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

      const objectArray = Object.values(groupedByGame).sort((a, b) =>
        a[0].game.data["release-date"].localeCompare(
          b[0].game.data["release-date"]
        )
      );

      const returnArray = objectArray.map((gameGroup) => {
        const uniqueCategories = gameGroup
          .sort((a, b) => a.place - b.place)
          .reduce((accumulator: PersonalBest[], currentValue) => {
            // Check if there is already an object with the same category id in the accumulator
            const existingCategory = accumulator.find(
              (run) => run.category.data.id === currentValue.category.data.id
            );

            // If not found, add the current object to the accumulator
            if (!existingCategory) {
              accumulator.push(currentValue);
            }

            return accumulator;
          }, []);
        return uniqueCategories;
      });

      //console.log(returnArray);

      return returnArray;
    },
  });

  function handleMouseDown(e: React.MouseEvent) {
    if (!scrollBoxRef.current) return;
    setCurrentMousePos(e.pageX - scrollBoxRef.current.offsetLeft);
    setScrollLeft(scrollBoxRef.current.scrollLeft);
    setIsScrolling(true);
  }

  function handleMouseUp() {
    setIsScrolling(false);
  }

  function handleMouseMove(e: React.MouseEvent) {
    if (!scrollBoxRef.current) return;
    if (isScrolling) {
      scrollBoxRef.current.scrollLeft =
        scrollLeft - (e.clientX - currentMousePos);
    }
  }

  function handleMouseLeave() {
    setIsScrolling(false);
  }

  if (isPending) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div
      className="flex w-full h-full overflow-x-auto px-10 py-40 gap-10"
      ref={scrollBoxRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {pbs.map((pb) => (
        <WrPbEntry key={pb[0].run.game} pb={pb} />
      ))}
    </div>
  );
}
