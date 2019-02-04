// user profile page
import React, { Component } from "react";
import API from "../../utils/API";

class UsrProfile extends Component {
    constructor(){
        super()
        this.logout = this.logout.bind(this)
    }

    render() {
        return (
            <div>
                <h3>User Profile - {this.props.updateUser.user_name}</h3>
            </div>
        )
    }
}

export default UsrProfile;