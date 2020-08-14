import React from "react";
import EmployeeCard from './EmployeeCard'


const EmployeeList = (props) => {
    return(
        <div className="list">
            {
                props.employees.map((employee, i)=>{
                    return <EmployeeCard 
                    image={employee.picture.thumbnail}
                    name={employee.name}
                    gender={employee.gender}
                    email={employee.email}
                    />
                })
            }
        </div>
    )
}

export default EmployeeList;