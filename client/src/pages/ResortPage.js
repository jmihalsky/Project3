import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import ResortDtl from "../components/resort_dtl";
import UserReports from "../components/user_reports";
import UserCondForm from "../components/user_cond_form";

class ResortPage extends Component {
  constructor(){
    super();
    this.state = {
      loggedIn: false,
      user_name: "",
      user_id: 0,
      ResInfo: [],
      UserRpts: [],
      report_date: "",
      new_snow: 0,
      temp: 0,
      lft_lines: "",
      cond: "",
      cond_notes: ""
    };
    // this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  componentDidMount() {
    this.getResortInfo(this.props.match.params.resort_id);
    this.getUserReports(this.props.match.params.resort_id);
  }

  getResortInfo = resort_id => {
    API.GetResort(resort_id).then(res => {
      this.setState({ ResInfo: res.data });
    });
  };

  getUserReports = (resort_id) => {
      API.GetUsrRpt(resort_id).then(res => {
        this.setState({ UserRpts: res.data});
      });
  }

  resortRender = () => {
    if (this.state.ResInfo) {
      var newArray = this.state.ResInfo.map(a => {
        return (
          <ResortDtl
            key={a.resort_id}
            resort_name={a.resort_name}
            address1={a.address1}
            address2={a.address2}
            city={a.city}
            state={a.state}
            postal_code={a.postal_code}
            num_slopes={a.num_slopes}
            web_link={a.web_link}
            map_link={a.map_link}
            lat={a.lat}
            lng={a.lon}
          />
        );
      });
      return newArray;
    }
  };

  reportsRender = () => {
      if (this.state.UserRpts)
      {
        var rptArray = this.state.UserRpts.map(b => {
            return (
                <UserReports
                    key={b.cond_id}
                    user_name={b.user_name}
                    report_date={b.report_date}
                    new_snow={b.new_snow}
                    temp={b.temp}
                    lft_lines={b.lft_lines}
                    cond_notes={b.cond_notes}
                />
            );
        });
        return rptArray;
      }
      else
      {
        this.noReports();
      }
  }

  noReports = () => {
      return <div><h2>There are currently no user reports available for this resort</h2></div>
  }

  handleUserCond = (new_snow, temp, lft_lines,cond,cond_notes) => {
    var UsrCond = {
      resort_id: this.state.resort_id,
      user_id: this.state.user_id,
      report_date: this.state.report_date,
      new_snow: new_snow,
      temp: temp,
      lft_lines: lft_lines,
      cond: cond,
      cond_notes: cond_notes
    };
  }

  userReportForm = () => {
      if(this.state.loggedIn)
      {

      }
      else
      {
          
      }
  }

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <div
            style={{
              backgroundColor: "rgba(51, 51, 51, 0.5)",
              color: "white",
              textShadow: "2px 2px 4px #000",
              textAlign: "center",
              margin: "15px",
              padding: "5px"
            }}
          >
            <Col size="md-12">{this.resortRender()}</Col>
          </div>
        </Row>
        <Row>
            <Col size="md-12">
            <h2>User Resort Conditions Reports</h2>
            {!this.state.UserRpts.length ? this.noReports() : this.reportsRender()}
            </Col>
        </Row>
        <Row>
            <Col size="md-12">
              <UserCondForm handleChange={this.handleChange} handleUserCond={this.handleUserCond}/>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default ResortPage;
