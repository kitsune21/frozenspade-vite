import YoutubeSubscriberButton from "../components/yt-subscribe-button";

export default function YouTube() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden z-10 group relative">
      <div className="flex items-center absolute top-20 w-0 border-0 border-second rounded-2xl bg-white p-0 transition-all duration-100 ease-in-out overflow-x-hidden group-hover:w-96 group-hover:p-4 group-hover:border-4">
        <YoutubeSubscriberButton youtubeChannel="frozenspade" />
        <span className="text-xl font-bold mx-auto text-main">
          Subscribe Here!
        </span>
      </div>
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/videoseries?si=_Hl5N4IJ5ktpxE6v;&amp;list=PLlN26eIiYFNc8pgFFLE60TOmGm4ZciNU7&amp;autoplay=1&amp;mute=1"
        title="Recent Videos by FrozenSpade"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  );
}
