import React from "react";


const SearchArea = (props) => {
    return (
        <div className="search-area">
            <form onSubmit={props.searchEmployee} action="">
                <input onChange={props.handleSearch} type="text"/>
                <button type="submit">Search Employee</button>
            </form>
        </div>
    )
}

export default SearchArea;