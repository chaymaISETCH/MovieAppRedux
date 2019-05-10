export const ADD = "ADD"
export const DELETE ="DELETE"
export const EDIT ="EDIT"
export const TOGGLE_SHOW ="TOGGLE_SHOW"
export const CHANGE_SELECTED_MOVIE ="CHANGE_SELECTED_MOVIE"
export const addMovie=(movie)=>{
    return {type : ADD,movie}
}
export const deleteMovie=(title)=>{
    return {type : DELETE,title}
}
export const editMovie=(movie,title)=>{
    return {type : EDIT,movie,title}
}
export const toggleShow=()=>{
    return {type : TOGGLE_SHOW}
}
export const changeSelectedMovie=(movie)=>{
    return {type:CHANGE_SELECTED_MOVIE,movie}
}