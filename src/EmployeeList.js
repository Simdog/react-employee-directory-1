import React from "react";
import EmployeeCard from './EmployeeCard';


const EmployeeList = (props) => { //rendering the data from the api 
    return(
        <div className="list">
            {
                props.employees.map((employee, i)=>{
                    return <EmployeeCard 
                     key={i} 
                     image={employee.picture.thumbnail}
                      firstName={employee.name.first}
                      lastName={employee.name.last}
                     gender={employee.gender}
                     location={employee.location.city}
                    />
                })
            }
        </div>
    )
}

export default EmployeeList;