import React, { Component } from "react";
import axios from "axios";
import { Consumer } from "./context";
export default class Addnew extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
  };
  onChangeState = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  onSubmitContact = async (dispatch, event) => {
    event.preventDefault();
    const { name, email, phone } = this.state;
    const newcontact = {
      name,
      email,
      phone,
    };

    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      newcontact
    );
    dispatch({ type: "ADD", payload: res.data });

    this.setState({
      name: "",
      email: "",
      phone: "",
    });
    this.props.history.push("/");
  };

  render() {
    return (
      <Consumer>
        {(value) => {
          const { dispatch } = value;
          return (
            <div className="card mb-3">
              <div className="card-header">Add New Contact</div>
              <div className="card-body">
                <form onSubmit={this.onSubmitContact.bind(this, dispatch)}>
                  <div className="form-group">
                    <label htmlFor="Name">Name: </label>
                    <input
                      type="text"
                      placeholder="Enter Name..."
                      className="form-control form-control-lg"
                      name="name"
                      value={this.state.name}
                      onChange={this.onChangeState}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Email">Email: </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control form-control-lg"
                      placeholder="Enter Email..."
                      value={this.state.email}
                      onChange={this.onChangeState}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Phone">Phone: </label>
                    <input
                      type="text"
                      name="phone"
                      className="form-control form-control-lg"
                      placeholder="Enter Phone Number..."
                      value={this.state.phone}
                      onChange={this.onChangeState}
                      required
                    />
                  </div>
                  <input
                    type="submit"
                    className="btn btn-light btn-block bg-success"
                    value="Add Contact"
                  />
                </form>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
