// User login component
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/API";

class UsrLogin extends Component {
    constructor(){
        super()
        this.state = {
            user_name: "",
            pword: "",
            redirectTo: null
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event){
        event.preventDefault();
        var UserInfo = {
            user_name: this.state.user_name,
            pword: this.state.pword
        };
        API.loginUser(UserInfo).then(response => {
            console.log(response);
            if (response.status === 200)
            {
                this.props.updateUser({
                    loggedIn: true,
                    user_name: response.data.username
                });
                this.setState({
                    redirectTo: "/"
                });
            }
        }).catch(error => {
            console.log(error);
        })
    }

    render() {
        if (this.state.redirectTo)
        {
            return <Redirect to={{ pathname: this.state.redirectTo }}/>
        }
        else
        {
            return (
                <div>
                    <h4>Snow Routes User Login</h4>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label className="form-label" htmlFor="user_name">Username:</label>
                            <input className="form-input" type="text" id="user_name" name="user_name" value={this.state.user_name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label className="form-label" htmlFor="pword">Password:</label>
                            <input className="form-input" type="password" name="pword" value={this.state.pword} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary" onClick={this.handleSubmit} type="submit">Login</button>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default UsrLogin;