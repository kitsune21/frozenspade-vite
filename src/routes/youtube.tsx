import YoutubeSubscriberButton from "../components/yt-subscribe-button";

export default function YouTube() {
  return (
    <div className="w-full h-full flex flex-col overflow-hidden group relative">
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/videoseries?si=eWHcHSwz0bIbQWfe&amp;list=PLksLUltIYAdwbZxfw-2iVVQdn5lgIFNBg&amp;autoplay=1&amp;mute=1"
        title="Recent Videos by FrozenSpade"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
      <div className="flex items-center p-2 sm:absolute top-20 sm:w-0 sm:border-0 border-second sm:rounded-2xl bg-white sm:p-0 transition-all duration-100 ease-in-out overflow-x-hidden group-hover:w-96 group-hover:p-4 group-hover:border-4">
        <YoutubeSubscriberButton youtubeChannel="frozenspade" />
        <span className="text-xl font-bold mx-auto text-main">
          Subscribe Here!
        </span>
      </div>
    </div>
  );
}
