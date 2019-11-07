import React from "react";
import "./VideoItem.css";

let VideoItem = ({ video }) => {
  return (
    <div className="video-item item">
      <img
        className="ui image"
        src={video.snippet.thumbnails.medium.url}
        alt="go away"
      />
      <div className="content">
        <div className="header">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;