import React, { useState, useEffect, useRef } from "react";
import { Stage, Layer } from "react-konva";
import Front from "./Clothes/Front";
import ColorPicker from "./Options/ColorPicker";
import Price from "./Options/Price";
import TextAddOn from "./Options/Text";
import Logo from "./Options/Logo";
import TextLayer from "./Layer/TextLayer";
import LogoLayer from "./Layer/LogoLayer";
import request from "superagent";
import Back from "./Clothes/Back";
import Clothes from "./Options/Clothes";
import Material from "./Options/Material";
import TransformerComponent from "./Util/TransformerComponent";
import Button from "../asset_components/Button"


// const CLOUDINARY_UPLOAD_PRESET = "kadsb2kb";
// const CLOUDINARY_UPLOAD_URL =
//   "https://api.cloudinary.com/v1_1/dae8cyrwc/image/upload";

function downloadURI(uri, name) {
  var link = document.createElement('a');
  link.download = name;
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }
  console.log({ mime })
  return new File([u8arr], filename, { type: mime });
}

const Customizer = ({ front, back, setDesign }) => {
  const [material, setMaterial] = useState("light");
  const [color, setColor] = useState({ r: 0, g: 0, b: 0 });
  const [textOn, setTextOn] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textScale, setTextScale] = useState([]);
  const [logoOn, setLogoOn] = useState(false);
  const [logoName, setLogoName] = useState("")
  const [logo, setLogo] = useState({ dataUrl: "" });
  const [clothing, setClothing] = useState("front");
  const [price, setPrice] = useState(0);
  const [selectedShapeName, setSelectedShapeName] = useState("");
  const [logoScale, setLogoScale] = useState([]);

  const stageRef = useRef(null);

  const changeColor = (color) => {
    setColor(color.rgb);
  };

  const changeTextColor = (color) => {
    setTextColor(color.hex);
  };

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleTextChecked = (name) => (event) => {
    if (textOn) {
      setTextColor("#000000");
    }
    setTextOn(event.target.checked);
    setTextColor("#000000");
  };

  const clothingComponent = (clothes) => {
    if (clothes === "front") {
      return <Front color={color} image={front} />;
    } else if (clothes === "back") {
      return <Back color={color} image={back} />;
    }
  };

  const textLayer = () => {
    if (textOn) {
      return (
        <TextLayer
          text={text}
          textColor={textColor}
          onTransform={(index, newProps) => {
            handleTextTransform(index, newProps);
          }}
        />
      );
    }
  };

  const logoLayer = () => {
    if (logoOn) {
      return (
        <LogoLayer
          // uploadedFileCloudinaryUrl={logo.uploadedFileCloudinaryUrl}
          logo={logo}
          onTransform={(index, newProps) => {
            handleLogoTransform(index, newProps);
          }}
          logoName={logoName}
        />
      );
    }
  };

  const removeLogo = () => {
    setLogoOn(false);
  };

  const onImageDrop = (files) => {
    const reader = new FileReader();

    reader.onload = () => {
      if (reader.readyState === 2) {
        // const newFile = dataURLtoFile(reader.result, "newFile.png")
        // console.log({newFile})
        // console.log("original file: ", files[0]);
        // setLogo({ uploadedFile: newFile });
        setLogo({ dataUrl: reader.result });
      }
    };

    reader.readAsDataURL(files[0]);

    setLogoOn(true);
    // handleImageUpload(files[0]);
  };

  // const handleImageUpload = (file) => {
  //   const upload = request
  //     .post(CLOUDINARY_UPLOAD_URL)
  //     .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
  //     .field("file", file);

  //   upload.end((err, response) => {
  //     if (err) {
  //       console.error(err);
  //     }

  //     if (response.body.secure_url !== "") {
  //       setLogo({
  //         uploadedFileCloudinaryUrl: response.body.secure_url
  //       });
  //     }
  //   });
  // };

  const changeClothing = (event) => {
    if (event.currentTarget.value !== clothing) {
      setClothing(event.currentTarget.value);
      setColor({ r: 255, g: 255, b: 255 });
    }
  };

  const changeMaterial = (event) => {
    setMaterial(event.currentTarget.value);
  };

  const handleStageMouseDown = (e) => {
    if (e.target === e.target.getStage()) {
      setSelectedShapeName("");
      return;
    }
    const clickedOnTransformer =
      e.target.getParent().className === "Transformer";
    if (clickedOnTransformer) {
      return;
    }

    const name = e.target.name();
    if (name) {
      setSelectedShapeName(name);
    } else {
      setSelectedShapeName("");
    }
  };

  const handleLogoTransform = (index, newProps) => {
    const logoScaleCopy = [...logoScale];
    logoScaleCopy[index] = {
      ...logoScaleCopy[index],
      ...newProps
    };
    setLogoScale(logoScaleCopy);
  };

  const handleTextTransform = (index, newProps) => {
    const textScaleCopy = [...textScale];
    console.log(textScaleCopy[index]);
    textScaleCopy[index] = {
      ...textScaleCopy[index],
      ...newProps
    };
    setTextScale(textScaleCopy);
  };

  const handleExport = () => {
    const uri = stageRef.current.toDataURL();
    console.log(stageRef.current);
    // we also can save uri as file
    // but in the demo on Konva website it will not work
    // because of iframe restrictions
    // but feel free to use it in your apps:
    downloadURI(uri, 'stage.png');
  };

  // const exportDesign = () => {
  //   setDesign(stageRef.current.toDataURL());
  // };

  // useEffect(() => {
  //   setDesign(stageRef.current.toDataURL());
  //   console.log("updated design")
  // }, [setDesign, stageRef])

  return (
    <div className="container cm-container mt-4">
      <div className="clothes">
        <Stage
          width={500}
          height={500}
          onMouseDown={handleStageMouseDown}
          ref={stageRef}
        >
          <Layer
            // onMouseUp={setDesign(stageRef.current.toDataURL())}
            // onDragStop={setDesign(stageRef.current.toDataURL())}
          >{clothingComponent(clothing)}</Layer>
          <Layer>
            {textLayer()}
            <TransformerComponent
              selectedShapeName={selectedShapeName}
            />
          </Layer>
          <Layer>
            {logoLayer()}
            <TransformerComponent
              selectedShapeName={selectedShapeName}
            />
          </Layer>
        </Stage>
      </div>
      <div className="options">
        <Clothes changeClothing={changeClothing} />
        <Price state={price} />
        <ColorPicker
          changeColor={changeColor}
          clothing={clothing}
        />
        <TextAddOn
          textOn={textOn}
          handleTextChecked={handleTextChecked}
          handleTextChange={handleTextChange}
          changeTextColor={changeTextColor}
        />
        <Logo
          logoOn={logoOn}
          onImageDrop={onImageDrop}
          removeLogo={removeLogo}
        />
        {clothing === "tshirt" ? (
          <Material
            material={material}
            changeMaterial={changeMaterial}
          />
        ) : null}
      </div>
      <Button
      onClick={() => setDesign(stageRef.current.toDataURL())}
      text="Save Design"
      classname="mt-5"
      >

      </Button>
      {/* <button onClick={handleExport}>Click here to log stage data URL</button> */}
    </div>
  );
};

export default Customizer;
