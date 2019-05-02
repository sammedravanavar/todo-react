import React, {Component} from 'react';
import axios from 'axios';
// import './main.css';
export default class UserDetails extends Component{
    constructor(props){
        super(props)
        this.state = {
            userId: props.match.params.userid
        }
    }
    componentDidMount(){
        this.props.FetchUserDetails(this.state.userId)
    }
    render(){
        let todos = this.props.todos.filter(todo=>{
            console.log(typeof todo.userId)
            console.log(typeof this.state.userId)
            return todo.userId === parseInt(this.state.userId)
        })
        return(
            <React.Fragment>
                <div className="row profile">
                    <div className="col-md-3">
                        <div className="profile-sidebar">
                            <div className="profile-usertitle">
                                <div className="profile-usertitle-name">
                                    {this.props.userDetails.name}
                                </div>
                            </div>
                        </div>                    
                    </div>
                    <div className="col-md-9">
                        <div className="profile-content">
                            {JSON.stringify(todos)}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}