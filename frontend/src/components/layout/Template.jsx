import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";
import { useStrictMode } from "react-konva";

function Template(props) {
  useStrictMode(false);

  return (
    <>
      <Header />
      <Content>{props.children}</Content>
      <Footer />
    </>
  );
}

export default Template;
