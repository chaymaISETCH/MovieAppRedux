import React from "react";
import "./Search.css"
import Rating from "./Rating"

const Search=({search, getRating, stars})=>{

        return (
          
                <div className="searchContainer">
                    <input  onChange={(e)=>search(e.target.value)} type="search" placeholder="type movie  name to search" />
                    <button className="search">Search</button>
                    <Rating stars={stars} getRating={getRating}/>
                </div>
                
    );
}
export default Search