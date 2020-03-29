import React from "react";
import ButtonGroup from "./common/buttonGroup";
import Input from "./common/input";
import Form from "./common/form";
import Joi from "joi-browser";

class GenerateForm extends Form {
  state = {
    data: {
      count: 10,
      mode: this.props.items[0]
    },
    errors: {}
  };

  schema = {
    count: Joi.number()
      .min(0)
      .max(20)
      .required(),
    mode: Joi.string()
  };

  doSubmit = () => {
    this.props.onClick(this.state.data);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="col-xs-12 col-md-7 mt-3">
            <ButtonGroup
              name="mode"
              items={this.props.items}
              activeItem={this.state.data.mode}
              onChange={this.handleChange}
            />
          </div>

          <div className="col-xs-12 col-md-5 mt-3">
            <Input
              name="count"
              label="Anzahl"
              value={this.state.data.count}
              onChange={this.handleChange}
            />
          </div>

          {this.state.errors.count && (
            <div className="col-12">
              <div className="alert alert-danger mt-3 mb-0">
                {this.state.errors.count}
              </div>
            </div>
          )}

          <div className="col-12 mt-3">
            <button
              disabled={this.validate()}
              className="btn btn-block btn-primary"
            >
              Generieren
            </button>
          </div>
        </div>
      </form>
    );
  }
}

export default GenerateForm;
