
import React from "react";
import {connect} from "react-redux";

import Search from "./Search"
import AddMovie from "./AddMovie"
import "./Rating.css"
import MovieCard from "./MovieCard";

class MovieList extends React.Component{
    
   
    constructor(props){
        super(props)
        console.log(this.props.movies)
        this.state={
            name:"",
            minRating:0,
            
        }
    }

    

    search=(searched)=>{
        this.setState({
            name: searched
        })
    }

    handleRating = (value) => {
        this.setState({
            show:true,
            minRating: value
        })
    }


 

    render(){
        console.log(this.props.selectedMovie,"selectedMovie")
        return (
            <div>
                <Search search={this.search} getRating={this.handleRating} stars={this.state.minRating}/>
                <div className="container">
                    {console.log(this.state)}
                    {this.props.movies
                        .filter(el => el.rating >= this.state.minRating && el.name.toUpperCase().match(this.state.name.toUpperCase()))
                        .map((el,i)=><MovieCard movie={el} key={i} />)}  
             
                <AddMovie />
            </div>
        </div>
    );
}}
const mapStateToProps=(state=>({movies:state.movies,selectedMovie:state.selectedMovie}))

export default connect(
mapStateToProps,
)(MovieList);
