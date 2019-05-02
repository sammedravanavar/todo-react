import axios from 'axios';
export function AddUser(){
    return {type:'ADD_USER'};
}
export function FetchUsers(){
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(res=>{
            dispatch({type:'FETCH_USERS', response:res.data})
        })
    }
}
export function FetchTodos(){
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            dispatch({type:'FETCH_TODOS', response:res.data})
        })
    }
}
export function FetchUserDetails(id){
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users/"+id).then(res=>{
            dispatch({type:'FETCH_USER_DETAILS', response:res.data})
        })
    }
}