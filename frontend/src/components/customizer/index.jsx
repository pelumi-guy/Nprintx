import React, { useState } from "react";
import { Stage, Layer, Rect, Circle } from "react-konva";
import TShirt from "./Clothes/T-Shirt";
import ColorPicker from "./Options/ColorPicker";
import Price from "./Options/Price";
import TextAddOn from "./Options/Text";
import Logo from "./Options/Logo";
import TextLayer from "./Layer/TextLayer";
import LogoLayer from "./Layer/LogoLayer";
import request from "superagent";
import Sweater from "./Clothes/Sweater";
import Clothes from "./Options/Clothes";
import Material from "./Options/Material";
import TransformerComponent from "./Util/TransformerComponent";

const CLOUDINARY_UPLOAD_PRESET = "kadsb2kb";
const CLOUDINARY_UPLOAD_URL =
  "https://api.cloudinary.com/v1_1/dae8cyrwc/image/upload";

const Customizer = () => {
  const [material, setMaterial] = useState("light");
  const [color, setColor] = useState({ r: 255, g: 255, b: 255 });
  const [textOn, setTextOn] = useState(false);
  const [text, setText] = useState("");
  const [textColor, setTextColor] = useState("#000000");
  const [textScale, setTextScale] = useState([]);
  const [logoOn, setLogoOn] = useState(false);
  const [logoName, setLogoName] = useState("")
  const [logo, setLogo] = useState({
    uploadedFileCloudinaryUrl: "",
    uploadedFile: null
  });
  const [clothing, setClothing] = useState("tshirt");
  const [price, setPrice] = useState(0);
  const [selectedShapeName, setSelectedShapeName] = useState("");
  const [logoScale, setLogoScale] = useState([]);

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
    if (clothes === "tshirt") {
      return <TShirt color={color} />;
    } else if (clothes === "sweater") {
      return <Sweater color={color} />;
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
          uploadedFileCloudinaryUrl={logo.uploadedFileCloudinaryUrl}
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
    setLogo({ uploadedFile: files[0] });
    setLogoOn(true);
    handleImageUpload(files[0]);
  };

  const handleImageUpload = (file) => {
    const upload = request
      .post(CLOUDINARY_UPLOAD_URL)
      .field("upload_preset", CLOUDINARY_UPLOAD_PRESET)
      .field("file", file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== "") {
        setLogo({
          uploadedFileCloudinaryUrl: response.body.secure_url
        });
      }
    });
  };

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

  return (
    <div className="container cm-container mt-4">
      <div className="clothes">
        <Stage
          width={500}
          height={500}
          onMouseDown={handleStageMouseDown}
        >
          <Layer>{clothingComponent(clothing)}</Layer>
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
    </div>
  );
};

export default Customizer;
