// User login component
import React, { Component } from "react";
import { Redirect } from "react-router-dom";

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
                            
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default UsrLogin;