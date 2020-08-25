import React, { Component } from 'react';
import SearchArea from './SearchArea';
import request from 'superagent';
import EmployeeList from './EmployeeList';

class Employees extends Component {

  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      initialEmployees: [],
      searchField: '',
      sort: ''
    }
  }

  componentDidMount() {
    this.fetchedEmployees()
  }
  //api stuff 
  fetchedEmployees = () => {



    request
      .get('https://randomuser.me/api/?results=10')
      .query({ q: this.state.searchField })
      .then((data) => {
        console.log(data);
        this.setState({ employees: [...data.body.results], initialEmployees: [...data.body.results] })
      })
  }

  searchEmployee = (e) => {
    e.preventDefault()
    console.log("it works");
    //return employee.name === "" 
  }

  sortByFemale() {
    // let initialEmployees = this.state.employees;
    let searchFemales = this.state.initialEmployees.filter(function (employee) {
      return employee.gender === "female";
    });

    // this.state.filteredEmployees.push(searchMales)
    this.setState({ employees: searchFemales })

  }

  sortByDefault = () => {//brings back initial state 
  this.setState({employees: this.state.initialEmployees})

  }

  sortByMale = () => {
    // var locale = this.state.employees.sort(compare);
    // function compare(a, b) {
    //   const nameA = a.location.toUpperCase();
    //   const nameB = b.location.toUpperCase();
    //   let comparison = 0;
    //   if (nameA > nameB) {
    //     comparison = 1;
    //   } else if (nameA < nameB) {
    //     comparison = -1;
    //   }
    //   return comparison;
    // }
    // this.setState({ employees: locale });

    // let initialEmployees = this.state.employees;
    let searchMales = this.state.initialEmployees.filter(function (employee) {
      return employee.gender === "male";
    });

    // this.state.filteredEmployees.push(searchMales)
    this.setState({ employees: searchMales })
  }

  handleSearch = (e) => { //e refers to event 
    console.log(e.target.value)
    this.setState({ searchField: e.target.value })
  }

  handleSort = (e) => {
    console.log(e.target.value);
    // this.setState({ sort: e.target.value })



    switch (e.target.value) {
      case "Male": this.sortByMale()
        break
      case "Female": this.sortByFemale()
        break
      case "Default": this.sortByDefault()
        break
      default: console.log("filter/sort not available")
    }
  }

  // cleanData = (data) => {
  //     const cleanedData = data.body.results.map((employee) => {
  //         if(employee)
  //     })
  // }

  render() {
    return (
      <div>
        <SearchArea searchEmployee={this.searchEmployee} handleSearch={this.handleSearch} handleSort={this.handleSort} />
        <EmployeeList employees={this.state.employees} />
      </div>
    );
  }
}

export default Employees;