import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if (error && touched) {
      return <div>{error}</div>;
    }
  };
  renderInput = ({ input, label, meta }) => {
    return (
      <div className="form-group">
        <label>{label}</label>
        <input className="form-control" {...input} />
        <div>{this.renderError(meta)}</div>
      </div>
    );
  };
  onSubmit = formValue => {
    this.props.StreamForm(formValue);
  };
  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.props.onSubmit)}
        className="mt-2"
      >
        <Field name="title" component={this.renderInput} label="Enter title" />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    );
  }
}
const validate = formValue => {
  const errors = {};
  if (!formValue.title) {
    errors.title = "You must enter a title";
  }
  if (!formValue.description) {
    errors.description = "You must enter a description";
  }
  return errors;
};
export default reduxForm({ form: "StreamForm", validate })(StreamForm);
