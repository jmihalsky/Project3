// user profile page
import React, { Component } from "react";
import API from "../../utils/API";

class UsrProfile extends Component {
    constructor(){
        super()
        this.state = {
            UserProfile: []
        }
        // this.logout = this.logout.bind(this);
    }

    componentDidMount(){
        this.profileLoad(this.state.user_name);
    }

    profileLoad = (user_name) => {
        API.UserProfile(user_name).then(res => {
            this.setState({UserProfile: res.data})
        })
    }

    render() {
        return (
            <div>
                <h3>User Profile - {this.state.UserProfile}</h3>
            </div>
        )
    }
}

export default UsrProfile;