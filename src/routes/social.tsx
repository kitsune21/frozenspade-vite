import useScript from "react-script-hook/lib/use-script";

export default function Social() {
  const [loading, error] = useScript({
    src: "https://platform.twitter.com/widgets.js",
  });

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <section className="size-full">
      <div className="flex flex-col sm:flex-row h-full justify-center items-center gap-10">
        <div className="flex justify-center items-center w-64 h-24 p-2 border-2 border-fourth rounded-lg bg-second hover:w-72 hover:h-28 transition-all duration-150 ease-in-out group">
          <a
            href="https://www.twitch.tv/frozenspade"
            target="_blank"
            className="text-third text-balance text-center border-b border-second group-hover:border-fifth group transition-all duration-150 ease-linear"
          >
            Check out my Twitch Page!
          </a>
        </div>
        <div className="flex justify-center items-center w-64 h-24 p-2 border-2 border-fourth rounded-lg bg-second hover:w-72 hover:h-28 transition-all duration-150 ease-in-out group">
          <a
            href="https://www.youtube.com/@frozenspade"
            target="_blank"
            className="text-third text-balance text-center border-b border-second group-hover:border-fifth group transition-all duration-150 ease-linear"
          >
            Catch my VOD's on YouTube!
          </a>
        </div>
        <div className="flex justify-center items-center w-64 h-24 border-2 border-fourth rounded-lg bg-second hover:w-72 hover:h-28 transition-all duration-150 ease-in-out">
          <a
            href="https://twitter.com/frozenspade?ref_src=twsrc%5Etfw"
            className="twitter-follow-button"
            data-show-count="true"
          >
            Follow @FrozenSpade
          </a>
        </div>
        <div className="flex justify-center items-center w-64 h-24 p-2 border-2 border-fourth rounded-lg bg-second hover:w-72 hover:h-28 transition-all duration-150 ease-in-out group">
          <a
            href="https://discord.gg/gN3XBgkzjz"
            target="_blank"
            className="text-third text-balance text-center border-b border-second group-hover:border-fifth group transition-all duration-150 ease-linear"
          >
            Join my Discord, The SpadeStation!
          </a>
        </div>
        <div className="flex justify-center items-center w-64 h-24 p-2 border-2 border-fourth rounded-lg bg-second hover:w-72 hover:h-28 transition-all duration-150 ease-in-out group">
          <a
            href="https://discord.com/invite/kWCfAPu"
            target="_blank"
            className="text-third text-balance text-center border-b border-second group-hover:border-fifth group transition-all duration-150 ease-linear"
          >
            Join the Speedy Adventures Discord For All Adventure Games!
          </a>
        </div>
      </div>
    </section>
  );
}
