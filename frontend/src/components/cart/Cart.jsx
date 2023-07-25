import React, { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";

// import MetaData from "../../Metadata";
import Counter from "../asset_components/Counter";
import DeleteIcon from "../asset_components/DeleteIcon";
import ScrollToTopOnMount from "../layout/ScrollToTopOnMount";

import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeItemFromCart } from "../../actions/cartActions";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { cartItems } = useSelector((state) => state.cart);

  const removeCartItemHandler = (id) => {
    dispatch(removeItemFromCart(id));
  };

  const increaseQty = (id, quantity, stock) => {
    const newQty = quantity + 1;

    if (newQty > stock) return;

    dispatch(addItemToCart(id, newQty));
  };

  const decreaseQty = (id, quantity) => {
    const newQty = quantity - 1;

    if (newQty <= 0) return;

    dispatch(addItemToCart(id, newQty));
  };

  const checkoutHandler = () => {
      navigate('/login?redirect=shipping')
  }

  const sumTotal = (cartItems) =>{
    let total = cartItems.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    )
    .toFixed(2)
    return total.toLocaleString()
  }


  return (
    <div className="container mt-5 py-4 px-xl-5">
      {/* <MetaData title={"Your Cart"} /> */}

      <ScrollToTopOnMount />
      <nav aria-label="breadcrumb" className="bg-custom-light rounded w-100">

      <h1 className="py-3"> Cart </h1>
      </nav>

      {cartItems.length === 0 ? (
        <h3 className="mt-5">Your Cart is Empty</h3>
      ) : (
        <Fragment>
          <h3 className="mt-5">
            Your Cart: <b>{cartItems.length} items</b>
          </h3>

          <div className="row d-flex justify-content-between">
            <div className="col-12 col-lg-8">
              {cartItems.map((item) => (
                <Fragment key={item.product}>
                  <hr />

                  <div className="cart-item" key={item.product}>
                    <div className="row">
                      <div className="col-4 col-lg-3">
                        <img
                          src={item.image}
                          alt="cart item"
                          height="90"
                          width="115"
                        />
                      </div>

                      <div className="col-5 col-lg-3">
                        <Link to={`/product/${item.product}`}>
                          {item.name}
                        </Link>
                      </div>

                      <div className="col-4 col-lg-2 mt-4 mt-lg-0">
                        <p id="card_item_price">₦{item.price.toLocaleString()}</p>
                      </div>

                      <div className="col-4 col-lg-3 mt-4 mt-lg-0">
                      <Counter
                          val={item.quantity}
                          incrementer={() =>
                            increaseQty(item.product, item.quantity, item.stock)
                          }
                          decrementer={() =>
                            decreaseQty(item.product, item.quantity)
                          }
                        />
                      </div>

                      <div className="col-4 col-lg-1 mt-4 mt-lg-1">
                        <DeleteIcon
                          color="red"
                          className='clickable'
                          deleteHandler={() =>
                            removeCartItemHandler(item.product)
                          }
                        />
                        {/* <i id="delete_cart_item" className="fa fa-trash btn btn-danger"
                                                // onClick={() => removeCartItemHandler(item.product)}
                                                ></i> */}
                      </div>
                    </div>
                  </div>
                  <hr />
                </Fragment>
              ))}
            </div>

            <div className="col-12 col-lg-3 my-4">
              <div id="order_summary">
                <h4>Order Summary</h4>
                <hr />
                <p>
                  Subtotal:{" "}
                  <span className="order-summary-values">
                    {cartItems.reduce(
                      (acc, item) => acc + Number(item.quantity),
                      0
                    )}{" "}
                    (Units)
                  </span>
                </p>
                <p>
                  Est. total:{" "}
                  <span className="order-summary-values">
                  ₦
                    {Number(cartItems
                      .reduce(
                        (acc, item) => acc + item.quantity * item.price,
                        0
                      )
                      .toFixed(2)).toLocaleString()}
                  </span>
                </p>

                <hr />
                <button
                  id="checkout_btn"
                  className="btn btn-primary btn-block"
                  onClick={checkoutHandler}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Cart;
