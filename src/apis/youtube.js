import axios from "axios";

let KEY = "AIzaSyCwHk-0YOucdy9puzWD3g8BePwFHRQ7-Sk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY
  }
});
