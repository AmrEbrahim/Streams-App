import React, { Component } from "react";
import { connect } from "react-redux";
import StreamForm from "./streamForm";
import { createStream } from "../../actions";

class StreamCreate extends Component {
  onSubmit = formValue => {
    this.props.createStream(formValue);
  };
  render() {
    return (
      <div>
        <h3>Create Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default connect(null, { createStream })(StreamCreate);
