// Resort Favorites Selection Page. User can select Resorts as favorites for their profile.

import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import ResList from "../components/ResListFav";
import API from "../utils/API";

class ResFavoriteSel extends Component {
    state = {
        loggedIn: false,
        user_name: "",
        user_id: 0,
        ResList: []
    }

    componentDidMount(){
        this.setState({loggedIn: this.props.state.loggedIn, user_name: this.props.state.user_name, user_id: this.props.state.user_id, resort_id: this.props.match.params.resort_id});
        this.resListLoad();
    }

    resListLoad = () => {
        API.AllResorts().then(res => {
            this.setState({ResList: res.data});
        });
    }

    resListRender = () => {
        if(this.state.ResList)
        {
            var newArray = this.state.ResList.map(a => {
                return <ResList key={a.resort_id}
                    addFavRes={this.addFavRes}
                    user_id={this.state.user_id}
                    resort_id={a.resort_id}
                    resort_name={a.resort_name}
                    resort_state={a.state}/>
            })
            return newArray;
        }
        else
        {

        }
    }

    addFavRes = (user_id, resort_id) => {
        var newFav = {
            user_id: user_id,
            resort_id: resort_id
        };
        API.UserFavSave(newFav).then(res => {
            console.log(res);
        });

    }

    render(){
        return(
            <Container>
                <Row>
                    <Col size="md-3">
                    {this.resListRender()}
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ResFavoriteSel;