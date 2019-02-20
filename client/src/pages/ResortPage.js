import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import ResortDtl from "../components/resort_dtl";
import UserReports from "../components/user_reports";
import UserCondForm from "../components/user_cond_form";
import AltLogin from "../components/alt_login";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import moment from "moment";
import { format } from "path";

class ResortPage extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      user_name: "",
      user_id: 0,
      resort_id: 0,
      ResInfo: [],
      UserRpts: [],
      report_date: "",
      new_snow: 0,
      temp: 0,
      lft_lines: "",
      cond: "",
      cond_notes: ""
    };
    this.handleUserCond = this.handleUserCond.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  componentDidMount() {
    let tst_date = moment().format();
    this.setState({loggedIn: this.props.state.loggedIn, user_name: this.props.state.user_name, user_id: this.props.state.user_id, resort_id: this.props.match.params.resort_id, report_date: tst_date});
    this.getResortInfo(this.props.match.params.resort_id);
    this.getUserReports(this.props.match.params.resort_id);
  }

  getResortInfo = resort_id => {
    API.GetResort(resort_id).then(res => {
      this.setState({ ResInfo: res.data });
    });
  };

  getUserReports = resort_id => {
    API.GetUsrRpt(resort_id).then(res => {
      this.setState({ UserRpts: res.data });
    });
  };

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
            lon={a.lon}
          />
        );
      });
      return newArray;
    }
  };

  reportsRender = () => {
    if (this.state.UserRpts) {
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
    } else {
      this.noReports();
    }
  };

  mapRender = () => {
    let temp = this.state.ResInfo.map(c => (
      <Map
        google={this.props.google}
        key={c.resort_id}
        center={{
          lat: c.lat,
          lng: c.lon
        }}
        zoom={10}
      >
        <Marker label={c.resort_name} />
      </Map>
    ));
    return temp;
  };

  noReports = () => {
    return (
      <div>
        <h2>There are currently no user reports available for this resort</h2>
      </div>
    );
  };

  handleUserCond = (event) => {
    event.preventDefault();
    var UsrCond = {
      resort_id: this.state.resort_id,
      user_id: this.state.user_id,
      report_date: this.state.report_date,
      new_snow: this.state.new_snow,
      temp: this.state.temp,
      lft_lines: this.state.lft_lines,
      cond: this.state.cond,
      cond_notes: this.state.cond_notes
    };
    console.log(UsrCond);
    API.UserReport(UsrCond)
      .then(res => {
        if (!res.data.errmsg)
        {
          console.log(res.data.errmsg);
        }
        else
        {
          console.log("success");
        }
      }).catch(error => {
        console.log(error);
      })
  };

  userReportForm = () => {
    if (this.state.loggedIn) {
    } else {
    }
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-5">
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
             {this.state.loggedIn ? <UserCondForm
                handleChange={this.handleChange}
                handleUserCond={this.handleUserCond}
              /> : <AltLogin/>} 
            </div>
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
              <h2>User Resort Conditions Reports</h2>
              {!this.state.UserRpts.length
                ? this.noReports()
                : this.reportsRender()}
            </div>
          </Col>
          <Col size="md-7">
            <div
              style={{
                position: "relative",
                height: "600px"
              }}
            >
              {this.mapRender()}
            </div>

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
              {this.resortRender()}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDyoARGXJYw3_uPwXUWTn6SBGod1bq-lHo",
  version: "3.35"
})(ResortPage);
