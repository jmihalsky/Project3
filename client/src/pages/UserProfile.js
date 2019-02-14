import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Profile from "../components/profile";
import UserFavs from "../components/usr_resorts";
import NoFavs from "../components/no_favs";
import API from "../utils/API";

class UserProfile extends Component {
    state = {
        user_name: "",
        UserProfile: [],
        UserFavs: []
    }

    componentDidMount(){
        this.profileLoad(this.props.location.state.user_name);
    }

    profileLoad = (user_name) => {
        API.UserProfile(user_name).then(res => {
            this.setState({UserProfile: res.data});
        });
    }    

    profileRender = () => {
        if(this.state.UserProfile){
            var newArray = this.state.UserProfile.map(a => {
                return <Profile key={a.user_id}
                    user_name={a.user_name}
                    first_name={a.first_name}
                    last_name={a.last_name}/>
            })
            return newArray;
        }
        else
        {

        }
    }

    userFavLoad = (user_name) => {
        API.UserResFavs(user_name).then(res => {
            this.setState({UserFavs: res.data});
        });
    }

    favsRender = () => {
        if(this.state.UserFavs)
        {
            var resArray = this.state.UserFavs.map(b => {
                return <UserFavs key={b.resort_id}
                        resort_name={b.resort_name}/>
            })
            return resArray;
        }
        else
        {
            this.userNoFavs();
        }
    }

    userNoFavs = () => {
        return <NoFavs></NoFavs>;
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                    {this.profileRender()}
                    </Col>
                </Row>
                <Row>
                    <UserFavs userFavLoad={this.userFavLoad}/>
                    {!this.state.UserFavs.length ? this.userNoFavs(): this.favsRender()}
                </Row>
            </Container>
        );
    }
}

export default UserProfile;