import React, { Component } from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Card from "../components/Card";
// import SavedResortDetail from "../components/SavedResortDetail";
import API from "../utils/API";

class SavedResorts extends Component {
  state = {
    resorts: []
  };

  //   componentDidMount() {
  //     API.getResorts()
  //       .then(res =>
  //         this.setState(
  //           {
  //             resorts: res.data
  //           },
  //           console.log(res.data)
  //         )
  //       )
  //       .catch(err => console.log(err));
  //   }

  loadResorts = () => {
    API.getResorts()
      .then(res => this.setState({ resorts: res.data }))
      .catch(err => console.log(err));
  };

  handleDeleteResort = id => {
    API.deleteResort(id)
      .then(res => this.loadResorts())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            {/* {this.state.resorts.length ? (
              <Card heading="Saved Resorts">
                {this.state.resorts.map(resort => (
                  <SavedResortDetail
                    key={resort._id}
                    src={
                      resort.src
                        ? resort.src
                        : "https://i.imgur.com/xFsuDGI.png"
                    }
                    title={resort.title ? resort.title : "No Title Available"}
                    authors={
                      resort.authors
                        ? resort.authors.join(", ")
                        : "No Authors Available"
                    }
                    date={resort.date ? resort.date : "No Date Available"}
                    description={
                      resort.description
                        ? resort.description
                        : "No Description Available"
                    }
                    link={resort.link ? resort.link : "No Link Available"}
                    handleDeleteResort={() =>
                      this.handleDeleteResort(resort._id)
                    }
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Saved Resorts" />
            )} */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SavedResorts;
