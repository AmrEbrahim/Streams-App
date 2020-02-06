import React, { Component } from "react";
import { fetchStreams } from "../../actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.css";

class StreamList extends Component {
  componentDidMount() {
    this.props.fetchStreams();
  }
  renderAdmin = stream => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <div>
          <Link
            to={`/streams/delete/${stream.id}`}
            className="btn btn-danger m-1"
          >
            Delete
          </Link>
          <Link
            to={`/streams/edit/${stream.id}`}
            className="btn btn-primary m-1"
          >
            Edit
          </Link>
        </div>
      );
    }
  };
  renderCreate = () => {
    if (this.props.isSignedIn) {
      return (
        <div className="mt-2 text-right">
          <Link to="/streams/new" className="btn btn-primary">
            Create stream
          </Link>
        </div>
      );
    }
  };
  render() {
    return (
      <div className="mt-2 ">
        {this.props.streams.map(stream => (
          <div
            className="list-unstyled border border-left-0 border-right-0"
            key={stream.id}
          >
            <div className="media">
              <i className="fas fa-camera mt-2 mr-2 fa-lg"></i>
              <div className="media-body">
                <Link
                  to={`/streams/${stream.id}`}
                  className="font-weight-bold m-0"
                >
                  {stream.title}
                </Link>
                <p className="m-0"> {stream.description}</p>
              </div>
              {this.renderAdmin(stream)}
            </div>
          </div>
        ))}
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
