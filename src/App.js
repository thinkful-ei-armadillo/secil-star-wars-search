import React, { Component } from 'react';
import SearchForm from './SearchForm';
import SearchResultsForm from './SearchResultsForm';
import ErrorPage from './ErrorPage';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      results: []
    }
    this.searchResults = this.searchResults.bind(this)
  }

searchResults (results) {
  const newResults = results.map(result => result.name)
  this.setState({results: newResults});
}

  render() {
    return (
      <div className="App">
        <header className="App-header">Star Wars Search App</header>
        <ErrorPage>
          <div className="defn">
          <p>This app allows you to get search results directly from STAR WARS API.</p>
          <p>You can search STAR WARS specific items from the API; so test your familiarity!</p>
          <p>Give it a try with Skywalker in characters; or, executer or deathstar in starship!</p>
          </div>
          <SearchForm searchResults={this.searchResults}/>
          <SearchResultsForm results={this.state.results}/>
          </ErrorPage>
      </div>
    );
  }
}

export default App;
