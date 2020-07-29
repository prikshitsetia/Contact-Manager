import React, { Component } from "react";
import PropTypes from "prop-types";
import { Consumer } from "./context";
import axios from "axios";
export default class Contact extends Component {
  state = {
    showdetails: false,
  };
  showdetailsfunc = () => {
    this.setState({
      showdetails: !this.state.showdetails,
    });
  };
  deletefunc = async (id, dispatch) => {
    const res = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    dispatch({ type: "DELETE", payload: id });
  };
  render() {
    const { contact } = this.props;
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card card-body mb-3">
              <h4>
                {contact.name}{" "}
                <i
                  onClick={this.showdetailsfunc}
                  className="fa fa-sort-down"
                  style={{ cursor: "pointer" }}
                />
                <i
                  className="fa fa-times"
                  style={{ cursor: "pointer", float: "right" }}
                  onClick={this.deletefunc.bind(this, contact.id, dispatch)}
                ></i>
              </h4>{" "}
              {this.state.showdetails ? (
                <ul className="list-group">
                  <li className="list-group-item">{contact.email}</li>
                  <li className="list-group-item">{contact.phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}
Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
