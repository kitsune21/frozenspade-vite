import type { PersonalBest } from "../types/types";
import FlipCard from "./flip-card";

type Props = {
  pb: PersonalBest[];
};

export default function WrPbEntry({ pb }: Props) {
  return (
    <div className="flex-shrink-0 w-80 h-fit">
      <FlipCard
        frontContent={
          pb[0].game.data.assets["cover-large"] &&
          pb[0].game.data.assets["cover-large"].uri && (
            <img
              className="w-full bg-black group select-none"
              src={pb[0].game.data.assets["cover-large"].uri}
              alt={`Game art for ${pb[0].game.data.names.international}`}
              loading="lazy"
            />
          )
        }
        backContent={
          <div className="bg-second py-10 px-2 border border-second rounded-xl">
            <p className="text-third text-center pb-10">
              {pb[0].game.data.names.international}
            </p>
            {pb
              .sort((a, b) => a.place - b.place)
              .map((run) => (
                <p key={run.run.id} className="text-third text-center">
                  {run.place} - {run.category.data.name} -{" "}
                  {run.run.times.primary}
                </p>
              ))}
          </div>
        }
      />
    </div>
  );
}
