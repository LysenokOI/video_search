import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";

class App extends React.Component {
  state = { videos: [] };

  onTermSubmit = async term => {
    //console.log(term);
    let response = await youtube.get("/search/", {
      params: { q: term }
    });
    /*console.log(response);
    нужно вытянуть data-items property*/
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar callWhenSubmit={this.onTermSubmit} />
        {/*I have{" "}
        {this.state.videos.length} videos*/}
        <VideoList videoL={this.state.videos} />
      </div>
    );
  }
}

export default App;
