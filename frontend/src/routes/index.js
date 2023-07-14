import Landing from "../components/landing/Landing";
import ProductDetail from "../components/products/detail/ProductDetail";
import ProductCategories from "../components/products/ProductCategories";
// import ProductList from "../components/products/ProductList";
import Customizer from "../components/customizer";
import CustomizeProduct from "../components/products/customize/CustomizeProduct";
import Login from "../components/user/Login";

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


// --- Protected Routes ---

// --- Admin Routes


export const publicRoutes = [
  homePage,
  productCategories,
  productDetails,
  customizeProduct,
  login,


];

export const protectedRoutes = [

];

export const dashboardRoutes = [

]
