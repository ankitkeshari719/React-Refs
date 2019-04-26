import React, { Component } from "react";
import "./RefsExample.css";

class RefsExample extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  componentDidMount() {
    this.inputRef.current.focus();
  }

  render() {
    return (
      <div className="refsComponent">
        <h1>Refs Example</h1>
        <input type="text" ref={this.inputRef} />
      </div>
    );
  }
}

export default RefsExample;
