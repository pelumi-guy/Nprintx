import React, { Component } from "react";
import { Button } from "@material-ui/core";
import Dropzone from "react-dropzone";

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      uploadedFile: null,
      uploadedFileCloudinaryUrl: "",
    };
  }

  //Using dropzone to allow users drag and drop file or click to select a file to upload
  render() {
    return (
      <div className="logo-container">
        {!this.props.logoOn ? (
          // <Dropzone
          //   className="dropzone"
          //   multiple={false}
          //   accept="image/jpg,image/png"
          //   onDrop={this.props.onImageDrop}
          // >
          //   {(dropzoneProps) => {
          //     return (
          //       <div>
          //         <p>Drop some files here</p>
          //       </div>
          //     );
          //   }}
          //   {/* Add a logo by dropping an image or click to select a file to upload. */}
          // </Dropzone>

          <Dropzone onDrop={this.props.onImageDrop}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}
                  className="dropzone py-5"
                >
                  <input {...getInputProps()} />
                  <p>Add a logo by dropping an image or click to select a file to upload.</p>
                </div>
              </section>
            )}
          </Dropzone>
        ) : (
          <Button onClick={this.props.removeLogo}>Remove Logo</Button>
        )}
      </div>
    );
  }
}

export default Logo;
