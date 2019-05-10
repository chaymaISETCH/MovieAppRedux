import React from "react";
import "./AddMovie.css"
import {connect} from "react-redux"
import {addMovie,toggleShow, changeSelectedMovie, editMovie} from "../redux/actions/actions"
class AddMovie extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name:"",
            rating: 0,
            img: "",
            year: 0
        }    
    }


 
   handleChange=(e) => {
       
       console.log('this.props.selectedMovie.name')
    this.setState({ 
         [e.target.name]: e.target.value 
        }) 
    }
    
    
     add=() => {

        if (this.state.name !== "" && this.state.year !== "" && this.state.img !== "") {
            let {name,rating,img,year} =this.state
            console.log("ok", this.state)
            this.setState({ show: false })
            if(this.props.selectedMovie.name!==""){
                this.props.editMovie({name,rating,img,year})
            }
            else
            this.props.addMovie({name,rating,img,year})
        }

        else alert("you must fill all fields")
    }
    show = () => {       

        this.setState({    
        name: "",
        rating: 0,
        img: "",
        year: 0 })
        this.props.changeSelectedMovie({name: "",
        rating: 0,
        img: "",
        year: 0})
        this.props.toggleShow()
    }
    render() {
        // let m = this.props.selectedMovie
 
        return (
            <div>
                <div className="card plus">
                    <button onClick={this.show}>+</button>
                </div>
                <div className="addContainer" style={{ display: this.props.show ? "block" : "none" }} >
                    <div className="subContainer">
                        <button onClick={this.show} className="close">x</button>

                        Name :
                            <input type="text"  name="name" 
                            value={this.props.selectedMovie.name+"ok"} onChange={this.handleChange}  />
                        Year :

                            <input type="text" name="year" value={this.state.year}  onChange={this.handleChange} />
                        Rate :
                            <input type="text" name="rating" onChange={this.handleChange} defaultValue={parseInt(this.state.rating)} />
                        Image :
                            <input type="text" name="img" onChange={this.handleChange} defaultValue={this.state.img} />
                        <button className="add" onClick={this.add}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps=(state=>({show:state.show,
selectedMovie:state.selectedMovie}))

const mapDispatchToProps=dispatch=>({addMovie:movie=>dispatch(addMovie(movie)),
toggleShow:()=>dispatch(toggleShow()),
changeSelectedMovie:(movie)=>dispatch(changeSelectedMovie(movie)),
editMovie:movie=>dispatch(editMovie(movie))})
export default connect(mapStateToProps,mapDispatchToProps)(AddMovie);