import React from "react";



const EmployeeCard = (props) => {
    return (
        <div className="card-container">
            <img src={props.image} alt="" />
            <div className="desc">
    <h2>{props.firstName} {props.lastName}</h2>
                <h3>{props.gender}</h3>
                <p>{props.location}</p>
            </div>
        </div>
    )
}

export default EmployeeCard;