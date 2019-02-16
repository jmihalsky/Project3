import React, {Component} from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import ResortDtl from "../components/resort_dtl";

class ResortPage extends Component{
    state = {
        ResInfo: []
    };

    componentDidMount(){
        this.getResortInfo(this.props.match.params.resort_id);
    }

    getResortInfo = (resort_id) => {
        API.GetResort(resort_id).then(res => {
            this.setState({ResInfo: res.data});
        })
    };

    resortRender = () => {
        if(this.state.ResInfo){
            var newArray = this.state.ResInfo.map(a => {
                return <ResortDtl key={a.resort_id}
                    resort_name={a.resort_name}
                    address1={a.address1}
                    address2={a.address2}
                    city={a.city}
                    state={a.state}
                    postal_code={a.postal_code}
                    num_slopes={a.num_slopes}
                    web_link={a.web_link}
                    map_link={a.map_link}/>
            })
            return newArray;
        }
    }

    render(){
        return(
            <Container>
                <Row>
                    {this.resortRender()}
                </Row>
            </Container>
        );
    }
}

export default ResortPage;