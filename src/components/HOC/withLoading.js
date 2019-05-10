import React from "react"
import Loading from "../Loading"
const withLoading = (Component)=>{
    return props=>props.isLoading?<Loading />:<Component {...props}/>
}
export default withLoading