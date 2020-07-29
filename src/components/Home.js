import React, { Component } from "react";
import { Consumer } from "./context";
import Contact from "./contact"; //Contact UI
class Home extends Component {
  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <div>
              <h1>
                <span className="text-danger"> Contact </span>List
              </h1>
              {contacts.map((contact) => (
                <Contact key={contact.id} contact={contact} />
              ))}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

export default Home;
