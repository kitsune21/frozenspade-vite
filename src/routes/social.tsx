import { useEffect } from "react";

export default function Social() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="flex h-full overflow-x-auto">
      <div className="w-full sm:w-1/3 overflow-y-auto">
        <a
          className="twitter-timeline"
          data-chrome="noborders"
          data-theme="dark"
          href="https://twitter.com/frozenspade?ref_src=twsrc%5Etfw"
        >
          Tweets by frozenspade
        </a>
      </div>
    </div>
  );
}
