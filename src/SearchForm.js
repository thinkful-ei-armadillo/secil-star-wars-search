import React, { Component } from 'react';

class SearchForm extends Component {

    state={
      query:'',
      queryClass: ''
    }
  
    setQuery = (typedQuery) => {
        this.setState({query: typedQuery})
    }

    setFetch = (queryClass) => {
        this.setState({queryClass: queryClass})
    }
  
    getSearchResults(e) {
      e.preventDefault();
      throw new Error('error');
      let query = this.state.query;
      let queryClass = this.state.queryClass;
      fetch(`https://swapi.co/api/${queryClass}/?search=${query}`)
      .then(res => {
          if (!res.ok) {
            throw new Error('error')}
          return res.json()})
      .then(resjson => this.props.searchResults(resjson.results))
      .catch(error => {throw new Error('we cannot get the fetch')})
      }
    
    render() {
    return (
        <div className="searchForm">
        <form onSubmit={(e)=>this.getSearchResults(e)}>
            <label htmlFor="searchQuery">Search the Cosmos</label>
            <br />
            <input type='text' placeholder='Type a query' name='searchName'
            onChange={(e) => this.setQuery(e.target.value)}/>
            <select onChange={(e) => this.setFetch(e.target.value)}>
                <option value="planets">planets</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
                <option value="people">characters</option>
                <option value="films">films</option>
                <option value="species">species</option>
            </select>
            <button>Submit</button>
        </form>
        </div>
    );
    }
}

export default SearchForm