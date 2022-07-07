import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player/lazy"), {
  ssr: false,
});

interface VideoPlayerProps {
  link: string;
}

export default function ResponsivePlayer(props: VideoPlayerProps) {
  return (
    <div className="player-wrapper">
      <ReactPlayer
        className="react-player"
        url={props.link}
        width="100%"
        height="100%"
      />
    </div>
  );
}
