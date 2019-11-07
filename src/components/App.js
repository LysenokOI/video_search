import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  //сделаем поиском по умолчанию github
  componentDidMount() {
    this.onTermSubmit("github");
  }

  onTermSubmit = async term => {
    //console.log(term);
    let response = await youtube.get("/search/", {
      params: { q: term }
    });
    /*console.log(response);
    нужно вытянуть data-items property*/
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0] // по умолчанию ставит первое видео из списка во фрейм
    });
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
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videoL={this.state.videos}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
