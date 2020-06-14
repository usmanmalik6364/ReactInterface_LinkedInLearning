import React, { Component } from "react";
import "../css/App.css";
import AddApointments from "./AddAppointments";
import SearchApointments from "./SearchAppointments";
import ListApointments from "./ListAppointments";
class App extends Component {
  constructor(props) {
    super();
    this.state = {
      myAppointments: [],
    };
  }
  componentDidMount = () => {
    fetch("./data.json")
      .then((response) => response.json())
      .then((result) => {
        const apts = result.map((item) => {
          return item;
        });
        this.setState({
          myAppointments: apts,
        });
      });
  };

  render() {
    return (
      <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <AddApointments />
                <SearchApointments />
                <ListApointments appointments={this.state.myAppointments} />
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default App;
