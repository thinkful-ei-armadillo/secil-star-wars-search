import React, { Component } from 'react';

class SearchForm extends Component {

    state={
      query:'',
      queryClass: '',
      error: null
    }
  
    setQuery = (typedQuery) => {
        this.setState({query: typedQuery})
    }

    setFetch = (queryClass) => {
        this.setState({queryClass: queryClass})
    }
  
    getSearchResults(e) {
      e.preventDefault();
      let query = this.state.query;
      let queryClass = this.state.queryClass;
      fetch(`https://swapi.co/api/${queryClass}/?search=${query}`)
      .then(res => {
          if (!res.ok) {
              this.setState({error:'Request error'});
          }
          return res.json()})
      .then(resjson => this.props.searchResults(resjson.results))
      .catch(() => {
          this.setState({error:'we cannot get the fetch'})
        })
      }
    
    render() {
        if(this.state.error){
            throw new Error('Error when fetching star wars API');
        }
        return (
            <div className="searchForm">
            <form onSubmit={(e)=>this.getSearchResults(e)}>
                <label htmlFor="searchQuery" >Search the Cosmos</label>
                <br />
                <input type='text' placeholder='Type a query' 
                name='searchName'
                className="tagline"
                onChange={(e) => this.setQuery(e.target.value)}/>
                <select className="choices"
                onChange={(e) => this.setFetch(e.target.value)}>
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