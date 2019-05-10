import React from "react";
import Rating from './Rating'
import "./MovieCard.css"
import {connect} from "react-redux"
import {deleteMovie,toggleShow, changeSelectedMovie} from "../redux/actions/actions"
import deleteimg from "../images/delete.png"
import editimg from "../images/edit.png"
import AddMovie from "./AddMovie"
class MovieCard extends React.Component{
  constructor(props){
    super(props)
    this.state={show:false}
  }
  edit = () => {
       this.setState({
         name: this.props.movie.name,
         rating:this.props.movie.rating,
         year:this.props.movie.year,
         img:this.props.movie.img
       })
  }

  render(){
  return (
    <div className="card">
      <img  alt={this.props.movie.name} src={this.props.movie.img} className="film-image"/>
        <div className="text-container card-header">
            <img onClick={(e)=>this.props.deleteMovie(this.props.movie.name)} src={deleteimg} alt="delete" className="delete"/>
            <img onClick={(e)=>{this.setState({show:true,
                     name: this.props.movie.name,
                     rating:this.props.movie.rating,
                     year:this.props.movie.year,
                     img:this.props.movie.img})
            this.props.changeSelectedMovie(this.props.movie)
            this.props.toggleShow()
          }} src={editimg} alt="edit" className="edit"/>

            <Rating stars={this.props.movie.rating} getRating={() => {}}/>
        </div>
      <div className="text-container">
        <h4>{this.props.movie.name} - {this.props.movie.year}</h4> 
      </div>
    </div>
  );
}}

const mapDispatchToProps=dispatch=>({deleteMovie:title=>dispatch(deleteMovie(title)),
  toggleShow:()=>dispatch(toggleShow()),
  changeSelectedMovie:(movie)=>dispatch(changeSelectedMovie(movie))
})
export default connect(null,mapDispatchToProps)(MovieCard);