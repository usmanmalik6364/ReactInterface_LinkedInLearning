import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "jquery/dist/jquery.js";
import "popper.js/dist/umd/popper.js";
import "bootstrap/dist/js/bootstrap.js";
class ListAppointments extends Component {
  render() {
    const listItems = this.props.appointments.map((item) => (
      <div>{item.petName}</div>
    ));

    return (
      <div className="appointment-list item-list mb-3">
        {this.props.appointments.map((item) => (
          <div className="pet-item col media py-3">
            <div className="mr-3">
              <button
                className="pet-delete btn btn-sm btn-danger"
                aria-label="close"
              >
                X
              </button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">{item.petName}</span>
                <span className="apt-data ml-auto">{item.aptDate}</span>
              </div>
              <div className="owner-name">
                <span className="label-item">{item.ownerName} </span>
                <span>Owner Name: </span>
              </div>
              <div className="apt-notes">{item.aptNotes}</div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default ListAppointments;
