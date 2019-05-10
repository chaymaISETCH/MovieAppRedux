import React from "react";
import "./AddMovie.css"
import {connect} from "react-redux"
import {addMovie,toggleShow} from "../redux/actions/actions"
class MovieInfo extends React.Component {

    constructor(props) {

        super(props)
        console.log(props)
        this.state = {
            name: "",
            rating: 0,
            img: "",
            year: 0
        }
    }

 
   handleChange=(e) => { this.setState({ [e.target.name]: e.target.value }) }
    add=() => {

        if (this.state.name !== "" && this.state.year !== "" && this.state.img !== "") {
            let {name,rating,img,year} =this.state
            console.log("ok", this.state)
            this.setState({ show: false })
            this.props.toggleShow()
            this.props.addMovie({name:name,rating:rating,img:img,year:year})
        }

        else alert("you must fill all fields")
    }
    show = () => {
        this.setState({   
        name: "",
        rating: 0,
        img: "",
        year: 0 })
    }
    render() {
        return (
            <div>
                <div className="addContainer" style={{ display: this.props.show ? "block" : "none" }} >
                    <div className="subContainer">
                        <button onClick={this.show} className="close">x</button>

                        Name :
                            <input type="text" name="name" onChange={this.handleChange} value={this.state.name} />
                        Year :
                            <input type="text" name="year" onChange={this.handleChange} value={this.state.year} />
                        Rate :
                            <input type="number" name="rating" onChange={this.handleChange} value={this.state.rat} />
                        Image :
                            <input type="text" name="img" onChange={this.handleChange} value={this.state.img} />
                        <button className="add" onClick={this.add}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps=(state=>({show:state.show}))

;
const mapDispatchToProps=dispatch=>({addMovie:movie=>dispatch(addMovie(movie)),
toggleShow:()=>toggleShow()})
export default connect(mapStateToProps,mapDispatchToProps)(MovieInfo);