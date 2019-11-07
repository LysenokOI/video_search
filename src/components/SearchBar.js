import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = event => {
    //console.log(event.target.value);
    this.setState({ term: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    //todo: need callback from parent component
    //родительский компонент говорит: какой терм нужно искать
    this.props.callWhenSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field"></div>
          <label>Video Search</label>
          <input
            type="text"
            value={this.state.term}
            onChange={this.onInputChange}
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;
