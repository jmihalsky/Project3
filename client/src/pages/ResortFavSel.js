// Resort Favorites Selection Page. User can select Resorts as favorites for their profile.

import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";

class ResFavoriteSel extends Component {
    state = {
        user_name: "",
        user_id: 0,
        ResList: []
    }

    componentDidMount(){
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
                
            })
        }
        else
        {

        }
    }

    render(){
        return(
            <Container>
                <Row>
                    <Col size="md-12">
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default ResFavoriteSel;