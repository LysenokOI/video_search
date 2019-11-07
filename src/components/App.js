import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  onTermSubmit = async term => {
    //console.log(term);
    let response = await youtube.get("/search/", {
      params: { q: term }
    });
    /*console.log(response);
    нужно вытянуть data-items property*/
    this.setState({ videos: response.data.items });
  };

  onVideoSelect = video => {
    //console.log("from the App", { video });
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar callWhenSubmit={this.onTermSubmit} />
        {/*I have{" "}
        {this.state.videos.length} videos*/}
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videoL={this.state.videos}
        />
      </div>
    );
  }
}

export default App;
