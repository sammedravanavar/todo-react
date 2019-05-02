import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class UserList extends Component{
    render(){
        var user = this.props.users.map(user=>(
            <div className="col-md-2" key={user.id}>
                <Link to={"/users/"+user.id}>
                    <img width="40%" src={user.avatar_url} alt={user.login}></img><br/>
                    <label>{user.name}</label>
                </Link>
            </div>
            )
        )
        return(
            <div className="row">
                {user}
            </div>
        )
    }
}