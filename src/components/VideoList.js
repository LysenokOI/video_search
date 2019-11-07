import React from "react";
import VideoItem from "./VideoItem";
/*let VideoList = props => {
  return <div>{props.videoL.length}</div>;
};*/
//новая запись ES2015
let VideoList = ({ videoL }) => {
  let renderedList = videoL.map(videoN => {
    return <VideoItem key={videoN.id.videoId} video={videoN} />;
  });

  //return <div>{videoL.length}</div>;
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default VideoList;
