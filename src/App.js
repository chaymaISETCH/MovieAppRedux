import React from 'react';
import "./App.css"
import MovieList from "./components/MovieList" 
import withLoading from "./components/HOC/withLoading"

export default class extends React.Component{
constructor(props)
{
  super(props)
  this.state={
    isLoading:true
  }
}


componentDidMount(){
  setTimeout(() => {
    this.setState({
      isLoading:false,
    })
  }, 5000);


}

render(){
  const Wrapped = withLoading(MovieList)
  return (
    <div>
      <Wrapped isLoading={this.state.isLoading} />
    </div>
  );}
}

