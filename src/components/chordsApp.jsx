import React, { Component } from "react";
import GenerateForm from "./generateForm";
import ChordsUtil from "../utils/ChordsUtil";
import ListGroup from "./common/listGroup";
const chordsUtil = new ChordsUtil();

class Chords extends Component {
  state = { dataPoolKeys: chordsUtil.getDataPoolKeys(), chords: [] };

  handleOnClick = options => {
    const chords = chordsUtil.generate(options.mode, options.count);
    this.setState({ chords });
  };

  render() {
    return (
      <div className="row">
        <div className="col-12">
          <GenerateForm
            items={this.state.dataPoolKeys}
            onClick={this.handleOnClick}
          />
        </div>
        <div className="col-12 mt-3">
          <ListGroup items={this.state.chords} />
        </div>
      </div>
    );
  }
}

export default Chords;
