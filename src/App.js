// import React from 'react';
import React, { Component } from 'react';
import Testcomp from './testcomp/Testcomp';
import RouteActiveExample from './testrouting/Testroutinglayout';
import Signup from './signuplogin/Signup';
import logo from './logo.svg';
import './App.css';
import createPolicy from './raduxstarting/Raduxstarting'
import { connect } from 'react-redux';


//function App(onDispEvent) {
class App extends Component {
  onDispEvent = (e) => {
    this.props.store.dispatch({
      type: 'CREATE_POLICY',
      payload: {
        name: "name",
        amount: 20
      }
    });
    //alert("Yes");
  }
  render() {
    console.log("props.....", this.props.policies)
    return (
      <div className="App">
        <RouteActiveExample />
        <br />
        <hr />
        <br />
        <Signup />
        <br />
        <hr />
        <br />
        <Testcomp />
        <div>
          <button className="button" onClick={this.props.onDispEvent2}>Dispatch Click</button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    startingBalance: state.startingBalance,
    policies: state.policies
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onDispEvent2: () => dispatch({
      type: 'CREATE_POLICY',
      payload: {
        name: "name",
        amount: 20
      }
    })
    // onDispEvent: () => dispatch({ type: 'CREATE_POLICY' })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default App;