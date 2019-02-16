import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import API from "../utils/API";
import ResortDtl from "../components/resort_dtl";
import UserReports from "../components/user_reports";

class ResortPage extends Component {
  state = {
    loggedIn: false,
    user_name: "",
    user_id: 0,
    ResInfo: [],
    UserRpts: []
  };

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

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">{this.resortRender()}</Col>
        </Row>
        <Row>
            <Col size="md-12">
            {!this.state.UserRpts.length ? this.reportsRender() : this.noReports()}
            </Col>
        </Row>
      </Container>
    );
  }
}

export default ResortPage;
