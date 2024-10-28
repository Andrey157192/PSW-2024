import React, { Component } from 'react';
import FormClass from './FormClass';
import './App.css';

class App extends Component {
  state = {
    fields: {},
    isLogin: true, // Toggle between login and register forms
  };

  onSubmit = (fields) => {
    this.setState({ fields });
    if (this.state.isLogin) {
      console.log("Login form submitted with data:", fields);
    } else {
      console.log("Registration form submitted with data:", fields);
    }
  };

  toggleForm = () => {
    this.setState((prevState) => ({
      isLogin: !prevState.isLogin,
      fields: {} // Clear fields on form switch
    }));
  };

  render() {
    return (
      <div className="App">
        <h1>{this.state.isLogin ? 'Login' : 'Register'}</h1>
        <FormClass isLogin={this.state.isLogin} onSubmit={(fields) => this.onSubmit(fields)} />
        <button onClick={this.toggleForm}>
          {this.state.isLogin ? 'Go to Register' : 'Go to Login'}
        </button>
        <p>{JSON.stringify(this.state.fields, null, 2)}</p>
      </div>
    );
  }
}

export default App;
