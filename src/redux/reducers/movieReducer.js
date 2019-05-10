import {ADD,DELETE,EDIT,TOGGLE_SHOW,CHANGE_SELECTED_MOVIE} from "../actions/actions"

const initialState={
    show:false,
    selectedMovie:{ 
        name: "",
        rating: 0,
        img: "",
        year: 0 
},
    movies:[{   name: "Secretly Greatly",
        year:"2013",
        rating:5,
        img:"/images/220px-Secretly_Greatly_poster.jpg"
    },
    {   name: "My friend is still alive",
        year:2013,
        rating:3,
        img:"/images/My_Friend_is_Still_Alive.jpg"
    },
    {   name: "John tucker must die",
        year:2006,
        rating:2,
        img:"/images/french-stream.fr.jpeg"
    },
    {   name: "Beauty and the beast",
        year:1991,
        rating:5,
        img:"/images/ob_02e072_la-belle-et-la-bete.jpg"
    }]}
const movieReducer = (state=initialState,action)=>{

    switch(action.type){
        case ADD:return {...state,movies:state.movies.concat(action.movie)}
        case DELETE:{console.log("delete",action)
        
        return {...state,movies:state.movies.filter(m=>m.name!==action.title)}}
        case TOGGLE_SHOW :{console.log("toggle")
        return {...state,show:!state.show}}
        case CHANGE_SELECTED_MOVIE:return {...state,selectedMovie:action.movie}
        case EDIT:{console.log("edit")
        return state}

        default: return state
    }

}

export default movieReducer