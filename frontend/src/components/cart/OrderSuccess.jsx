import React, { Fragment, useEffect, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
// import MetaData from "../../Metadata";
import { loadUser } from "../../actions/authActions";
import Loader from "../layout/Loader";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../actions/cartActions";
import { clearOrderErrors, createOrder } from "../../actions/orderActions";
import { useAlert } from "react-alert";
import Image from "../../assets/images/order_success.png";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const alert = useAlert();

  // const { isAuthenticated, loading, user } = useSelector(
  //   (state) => state.authentication
  // );
  const { cartItems, shippingInfo } = useSelector((state) => state.cart);
  const { error } = useSelector((state) => state.order);

  const order = useMemo(() => ({
    orderItems: cartItems,
    shippingInfo,
  }), [cartItems, shippingInfo])

  const orderInfo = JSON.parse(sessionStorage.getItem("orderInfo"));
  if (orderInfo) {
    order.itemsPrice = orderInfo.itemsPrice;
    order.shippingPrice = orderInfo.shippingPrice;
    order.taxPrice = orderInfo.taxPrice;
    order.totalPrice = orderInfo.totalPrice;
    order.paymentInfo = {
      reference: orderInfo.paymentRef,
      status: "paid",
    };
  }

  useEffect(() => {
    // if (!user) {
    //   dispatch(loadUser());
    // }

    // if (!loading && !isAuthenticated){
    //     navigate('/login?redirect=');
    // }

    dispatch(createOrder(order));

    if (error) {
      alert.error(error);
      dispatch(clearOrderErrors());
    } else {
      dispatch(emptyCart());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [error, alert, dispatch]);

  return (
    <div className="container mt-5 py-4 px-xl-5">
      {/* <MetaData title={"Order Success"} /> */}

      <div className="row justify-content-center">
        <div className="col-6 mt-5 text-center">
          <img
            className="my-5 img-fluid d-block mx-auto"
            src={Image}
            alt="Order Success"
            width="200"
            height="200"
          />

          <h2>Your Order has been placed successfully.</h2>

          <Link to="/orders/me">Go to Orders</Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
