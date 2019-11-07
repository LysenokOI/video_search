import React from "react";

let VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading</div>;
  }
  // ошибка video по умолчанию null, у него нет свойств snippet. Добавили if
  return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
