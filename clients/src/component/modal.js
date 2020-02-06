import React from "react";
import Modal from "react-bootstrap4-modal";

class ShowModal extends React.Component {
  render() {
    return (
      <Modal onClick={this.props.Dismiss} visible={true}>
        <div className="modal-header">
          <h5 className="modal-title">{this.props.title}</h5>
        </div>
        <div className="modal-body">
          <p>{this.props.content}</p>
        </div>
        <div className="modal-footer">{this.props.actions}</div>
      </Modal>
    );
  }
}
export default ShowModal;
