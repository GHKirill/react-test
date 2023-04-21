import React, { Component } from 'react';

export default class Form extends Component {
  state = {
    inputName: '',
  };

  handleOnChange = event => {
    this.setState({ inputName: event.target.value });
  };
  render() {
    const { inputName } = this.state;
    return (
      <Form>
        <input
          name="inputName"
          placeholder="input"
          value={inputName}
          onChange={this.handleOnChange}
        />
      </Form>
    );
  }
}
