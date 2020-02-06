import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";
import flv from "flv.js";

class StreamShow extends Component {
  constructor(props) {
    super(props);

    this.videoRef = React.createRef();
  }
  buildPlayer = () => {
    if (this.player || !this.props.stream) {
      return;
    }
    this.player = flv.createPlayer({
      type: "flv",
      url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
    });
    this.player.attachMediaElement(this.videoRef.current);
    this.player.load();
  };
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
    this.buildPlayer();
  }
  componentDidUpdate() {
    this.buildPlayer();
  }
  componentWillUnmount() {
    this.player.destroy();
  }
  render() {
    if (!this.props.stream) {
      return <div>Loading...</div>;
    }
    return (
      <div>
        <video ref={this.videoRef} className="w-100" controls />
        <h5>{this.props.stream.title}</h5>
        <p>{this.props.stream.description}</p>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(mapStateToProps, { fetchStream })(StreamShow);
