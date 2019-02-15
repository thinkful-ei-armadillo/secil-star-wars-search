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
        <SearchForm searchResults={this.searchResults}/>
        <SearchResultsForm results={this.state.results}/>
        </ErrorPage>
      </div>
    );
  }
}

export default App;
