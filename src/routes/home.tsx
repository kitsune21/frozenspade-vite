import { TwitchEmbed } from "react-twitch-embed";

export default function Home() {
  return (
    <div className="h-full w-full">
      <TwitchEmbed
        channel="frozenspade"
        autoplay
        muted
        withChat
        darkMode
        width="100%"
        height="100%"
      />
    </div>
  );
}
