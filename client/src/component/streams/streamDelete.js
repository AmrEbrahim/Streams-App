import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStream, deleteStream } from "../../actions";
import ShowModal from "../modal";
import history from "../../history";

class StreamDelete extends Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  renderContent = () => {
    if (!this.props.stream) {
      return "Are you sure you want to delete this stream?";
    }
    return `Are you sure you want to delete this stream with title: ${this.props.stream.title}`;
  };
  actions = (
    <React.Fragment>
      <button
        onClick={() => this.props.deleteStream(this.props.match.params.id)}
        type="button"
        className="btn btn-danger"
      >
        Delete
      </button>
      <Link to="/" type="button" className="btn btn-secondary">
        Cancel
      </Link>
    </React.Fragment>
  );
  render() {
    return (
      <ShowModal
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.actions}
        Dismiss={() => history.push("/")}
      />
    );
  }
}
const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
