import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import UserList from '../UserList';
import UserDetails from '../UserDetails';

export default class Root extends React.Component{
    componentDidMount(){
        this.props.FetchUsers.bind(null)();
        this.props.FetchTodos.bind(null)();
    }
    
    render(){
        return (
            <BrowserRouter>
                <Route exact path='/' render={({history})=>{
                        return <Redirect to={{pathname: '/users'}}/>
                }}/>
                <Route exact path='/users' render={({history})=>{
                    return <UserList history={history} {...this.props}/>
                }}/>
                <Route exact path="/users/:userid" render={(props)=>{
                    return <UserDetails {...props} {...this.props}/>
                }}/>
            </BrowserRouter>
        );
    }
}