import type { PersonalBest } from "../types/types";
import FlipCard from "./flip-card";
import first from "../assets/1st.png";
import second from "../assets/2nd.png";
import third from "../assets/3rd.png";

type Props = {
  pb: PersonalBest[];
};

export default function WrPbEntry({ pb }: Props) {
  function formatDate(date: string) {
    const dateToFormat = new Date(date);
    return new Intl.DateTimeFormat(undefined).format(dateToFormat);
  }

  function convertTime(time: string): string {
    time = time.substring(2);
    const splitTime = time.match(/\d+(\.\d+)?[HMS]/g);

    let hours = 0;
    let minutes = 0;
    let seconds = 0;

    if (!splitTime) return "";

    splitTime.forEach((part) => {
      if (part.includes("H")) {
        hours = parseInt(part.replace("H", ""));
      }
      if (part.includes("M")) {
        minutes = parseInt(part.replace("M", ""));
      }
      if (part.includes("S")) {
        seconds = parseFloat(part.replace("S", ""));
      }
    });

    let formattedTime = "";

    if (hours > 0) {
      formattedTime += hours.toString() + "h ";
    }

    formattedTime += minutes.toString() + "m ";
    formattedTime += seconds.toString() + "s";

    return formattedTime;
  }

  return (
    <div className="flex-shrink-0 w-[22rem] h-fit">
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
          <div className="bg-second py-8 px-2 border border-second rounded-xl select-none text-third text-center">
            <p>{pb[0].game.data.names.international}</p>
            <p>Released: {formatDate(pb[0].game.data["release-date"])}</p>
            <div className="border-b border-fourth mb-2" />
            {pb
              .sort((a, b) => a.place - b.place)
              .map((run) => (
                <p
                  key={run.run.id}
                  className={`flex justify-center items-center py-1 ${
                    run.place === 1 ? "text-fourth" : ""
                  }`}
                >
                  {run.place === 1 ? (
                    <img src={first} alt="1st Place Trophy" className="w-5" />
                  ) : run.place === 2 ? (
                    <img src={second} alt="2nd Place Trophy" className="w-5" />
                  ) : (
                    <img src={third} alt="3rd Place Trophy" className="w-5" />
                  )}{" "}
                  - {run.category.data.name} -{" "}
                  {convertTime(run.run.times.primary)}
                </p>
              ))}
          </div>
        }
      />
    </div>
  );
}
