import React, { Component } from "react";
import { Image } from "react-konva";
import { render } from "react-dom";

class LogoLayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: null,
      x: 20,
      y: 20
    };
  }

  //check if there was an logo imported or not otherwise import logo
  componentDidUpdate(prevProps) {
    if (
      this.props.logo !==
      prevProps.logo
    ) {
      this.getImage();
    }
  }

  //get the logo image
  getImage() {
    if (this.state.image === null) {
      const image = new window.Image();
      image.src = this.props.logo.dataUrl;
      // console.log({image});
      image.onload = () => {
        this.setState({
          image: image
        });
      };
    }
  }

  handleClick = () => {
    this.logo.cache();
  };

  //As the object moves, it updates the x and y axis so it doesn't re-render
  //to original starting point. The onTransform function helps scale the logo
  //to users needs
  handleChange = e => {
    this.setState({
      x: e.target.x(),
      y: e.target.y()
    });
    const shape = e.target;
    this.props.onTransform({
      x: shape.x(),
      y: shape.y(),
      width: shape.width() * shape.scaleX(),
      height: shape.height() * shape.scaleY(),
      rotation: shape.rotation()
    });
  };

  render() {
    return (
      <Image
        name="logo"
        image={this.state.image}
        x={this.state.x}
        y={this.state.y}
        width={50}
        height={50}
        draggable={true}
        ref={node => {
          this.logo = node;
        }}
        onClick={this.handleClick}
        onDragEnd={this.handleChange}
        onTransformEnd={this.handleChange}
      />
    );
  }
}

export default LogoLayer;
