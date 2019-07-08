import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div className="top">
          <div className="navbar">
            <div className="logo">
              <img src="./images/ironhack-logo.svg" />
            </div>
            <div className="logo2">
              <img src="./images/menu-top.svg" />
            </div>
          </div>
          <div className="content-container">
            <div className="content">
              <div className="title">
                <h1>
                  Say Hello to <br />
                  ReactJs
                </h1>
              </div>
              <div className="subtitle">
                <h3>
                  You will learn a frontend <br />
                  framework from scratch, to <br />
                  become an ninja developer
                </h3>
              </div>
              <div className="button">
                <button>Awesome!</button>
              </div>
            </div>
            <div className="react">
              <div className="react-logo">
                <img src="./images/react-logo.svg" />
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="declarative">
            <img src="./images/icon1.png" />
            <h5>Declarative</h5>
            <p>
              React makes it <br />
              painless to create <br />
              interactive UIs.
            </p>
          </div>
          <div className="components">
            <img src="./images/icon2.png" />
            <h5>Components</h5>
            <p>
              Build encapsuled <br />
              components that <br />
              manage their state.
            </p>
          </div>
          <div className="Single-way">
            <img src="./images/icon3.png" />
            <h5>Single-way</h5>
            <p>
              A set of immutable <br />
              values are passed to <br />
              the component's.
            </p>
          </div>
          <div className="JSX">
            <img src="./images/icon4.png" />
            <h5>JSX</h5>
            <p>
              Statically-typed <br />
              designed to run on <br />
              modern browser.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
