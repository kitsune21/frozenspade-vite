import { useEffect, useRef } from "react";
import useScript from "react-script-hook";

interface Props {
  youtubeChannel: string;
}

interface gapiYt {
  ytsubscribe: {
    render: (
      container: HTMLElement,
      parameters: { channel: string; layout: string }
    ) => () => void;
  };
}
declare const gapi: gapiYt;
export default function YoutubeSubscriberButton({
  youtubeChannel,
}: Props): JSX.Element | null {
  const [gapiLoading, gapiError] = useScript({
    src: "https://apis.google.com/js/platform.js",
  });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!youtubeChannel || !container) {
      return;
    }

    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    if (gapiLoading || gapiError) {
      return;
    }

    (gapi as gapiYt).ytsubscribe.render(container, {
      channel: youtubeChannel,
      layout: "full",
    });

    return () => {
      while (container && container.firstChild) {
        container.removeChild(container.firstChild);
      }
    };
  }, [youtubeChannel, gapiLoading, gapiError, containerRef]);

  return <div ref={containerRef} />;
}
