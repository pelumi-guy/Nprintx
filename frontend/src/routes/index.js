import Landing from "../components/landing/Landing";
import ProductDetail from "../components/products/detail/ProductDetail";
import ProductCategories from "../components/products/ProductCategories";
// import ProductList from "../components/products/ProductList";
import Customizer from "../components/customizer";
import CustomizeProduct from "../components/products/customize/CustomizeProduct";
import Login from "../components/user/Login";
import Cart from "../components/cart/Cart";
import Shipping from "../components/cart/Shipping";
import ConfirmOrder from "../components/cart/ConfirmOrder";
import OrderSuccess from "../components/cart/OrderSuccess";
import Payment from "../components/cart/Payment";


const homePage = {
  path: "/",
  name: "Landing",
  component: Landing,
};

// const productList = {
//   path: "/products",
//   name: "Products List",
//   component: ProductList,
// };

const productCategories = {
  path: "/products",
  name: "Design Product",
  component: ProductCategories,
};

const productDetails = {
  path: "/products/:slug",
  name: "Products Detail",
  component: ProductDetail,
};

const customizeProduct = {
  path: "/products/customize",
  name: "Customize Product",
  component: CustomizeProduct,
}

const login = {
  path: "/login",
  name: "Login",
  component: Login,
}

const cart = {
  path: "/cart",
  name: "Cart",
  component: Cart,
}

const shipping = {
  path: "/shipping",
  name: "Shipping",
  component: Shipping,
}

const confirmOrder = {
  path: "/order/confirm",
  name: "Confirm Order",
  component: ConfirmOrder,
}

const orderSuccess = {
  path: "/order/success",
  name: "Order Success",
  component: OrderSuccess,
}

const payment = {
  path: "/payment",
  name: "Payment",
  component: Payment,
}

// --- Protected Routes ---

// --- Admin Routes


export const publicRoutes = [
  homePage,
  productCategories,
  productDetails,
  customizeProduct,
  login,
  cart,
  shipping,
  confirmOrder,
  orderSuccess,
  payment,




];

export const protectedRoutes = [

];

export const dashboardRoutes = [

]
