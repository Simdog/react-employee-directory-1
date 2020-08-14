import React, { Component } from 'react';
import SearchArea from './SearchArea';

class Employees extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
            searchField: ''
        }
    }

    handleSearch = (e) => { //e refers to event 
        console.log(e.target.value)
        this.setState({ searchField: e.target.value })
    }

  render() {
  return (
    <div>
      <SearchArea handleSearch={this.handleSearch}/>
    </div>
  );
}
}

export default Employees;