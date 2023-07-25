import React, { Component } from "react";
import { Button } from "@material-ui/core";

class Clothes extends Component {
  render() {
    return (
      <div className="clothes-type">
        <Button onClick={this.props.changeClothing} value="front">
          Front
        </Button>
        <Button onClick={this.props.changeClothing} value="back">
          back
        </Button>
      </div>
    );
  }
}

export default Clothes;
