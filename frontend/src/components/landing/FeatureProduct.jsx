// import Image from "../assets/images/nillkin-case.webp"
import Image from "../../assets/images/bear-sleeveless.jpg"
import { Link } from "react-router-dom";

function FeatureProduct() {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="card-img-top bg-dark cover"
          height="240"
          alt=""
          src={Image}
        />
        <div className="card-body">
          <h5 className="card-title text-center">Fitted Fitness Tank Top For Gym</h5>
          <p className="card-text text-center text-muted"></p>
          <div className="d-grid gap-2">
            <Link to="/products/1" className="btn btn-outline-dark" replace>
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureProduct;
