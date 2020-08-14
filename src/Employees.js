import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            searchField: ''
        }
    }

    //api stuff 
    searchEmployee = (e) => {
        e.preventDefault();
        request
        .get('https://randomuser.me/api/')
        .query({ q: this.state.searchField})
        .then((data)=>{
            console.log(data);
        })
    }

    handleSearch = (e) => { //e refers to event 
        console.log(e.target.value)
        this.setState({ searchField: e.target.value })
    }

  render() {
  return (
    <div>
      <SearchArea searchEmployee={this.searchEmployee} handleSearch={this.handleSearch}/>
    </div>
  );
}
}

export default Employees;