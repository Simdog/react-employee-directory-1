import React from "react";


const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchEmployee} action="">
                <input onInput={props.handleSearch} type="text"/>
                <button type="submit">Search Employee</button>
                <select defaultValue="Sort" onChange={props.handleSort}>
                    <option disabled value="Sort">Sort</option>
                    <option value="Default">Default</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </form>
        </div>
    )
}

export default SearchArea;//