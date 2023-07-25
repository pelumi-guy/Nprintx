import React, { useState } from "react";
import { Button } from "@material-ui/core";
import Dropzone from "react-dropzone";

const Logo = ({ logoOn, onImageDrop, removeLogo }) => {
//   const [uploadedFile, setUploadedFile] = useState(null);
//   const [uploadedFileCloudinaryUrl, setUploadedFileCloudinaryUrl] = useState("");

  return (
    <div className="logo-container">
      {!logoOn ? (
        <Dropzone onDrop={onImageDrop}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}
              className="dropzone py-5"
              style={{ cursor: "pointer" }}
              >
                <input {...getInputProps()} />
                <p>Add a logo by dropping an image or click to select a file to upload.</p>
              </div>
            </section>
          )}
        </Dropzone>
      ) : (
        <Button onClick={removeLogo}>Remove Logo</Button>
      )}
    </div>
  );
};

export default Logo;
