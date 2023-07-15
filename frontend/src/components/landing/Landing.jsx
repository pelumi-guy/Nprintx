import Banner from "./Banner";
import FeatureProduct from "./FeatureProduct";
import ScrollToTopOnMount from "../layout/ScrollToTopOnMount";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <>
      <ScrollToTopOnMount />
      <Banner />
      <div className="d-flex flex-column bg-white py-1">
        <p className="text-center px-5 mx-5 lead">
          Welcome to our Merch Store, where your unique style meets endless
          possibilities. Whether you're looking for a personalized t-shirt
          featuring your favorite meme or a custom product to bring your group
          events together, we've got you covered. Explore our wide range of
          designs and products, handcrafted with care and creativity. Express
          yourself, make a statement, and let your individuality shine through
          with our customizable merchandise. Join the trendsetters and find the
          perfect item that speaks to you. Discover the power of personalization
          and create memories that last a lifetime. Get ready to showcase your
          style and make a lasting impression with our exclusive collection.
          <br />
          Shop now and be the envy of the crowd!
        </p>
        <div className="d-flex justify-content-center">
          <Link to="/products" className="btn btn-primary">
            Start Designing
          </Link>
        </div>
      </div>
      <h2 className="text-muted text-center mt-4 mb-3">Best Selling Products</h2>
      <div className="container pb-5 px-lg-5">
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 px-md-5">
          {Array.from({ length: 6 }, (_, i) => {
            return <FeatureProduct key={i} />;
          })}
        </div>
      </div>
      <div className="d-flex flex-column bg-white py-1">
        <h5 className="text-center mb-3">Follow us on</h5>
        <div className="d-flex justify-content-center">
          <a href="!#" className="me-3">
            <FontAwesomeIcon icon={["fab", "facebook"]} size="2x" />
          </a>
          <a href="!#">
            <FontAwesomeIcon icon={["fab", "instagram"]} size="2x" />
          </a>
          <a href="!#" className="ms-3">
            <FontAwesomeIcon icon={["fab", "twitter"]} size="2x" />
          </a>
        </div>
      </div>
    </>
  );
}

export default Landing;
