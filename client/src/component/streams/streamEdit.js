import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./streamForm";

class StreamEdit extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  onSubmit = formValue => {
    this.props.editStream(this.props.match.params.id, formValue);
  };
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <StreamForm
        initialValues={_.pick(this.props.stream, "title", "description")}
        onSubmit={this.onSubmit}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
