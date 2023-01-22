//import { setLocalStorage } from "./utils.mjs";
//import ProductData from "./ProductData.mjs";

//const dataSource = new ProductData("tents");

//function addProductToCart(product) {
 // setLocalStorage("so-cart", product);
//}
// add to cart button event handler
//async function addToCartHandler(e) {
 // const product = await dataSource.findProductById(e.target.dataset.id);
  //addProductToCart(product);
//}

// add listener to Add to Cart button
//document
  //.getElementById("addToCart")
  //.addEventListener("click", addToCartHandler);////
//import ProductData from './ProductData.mjs';
//import { setLocalStorage, getParam } from './utils.mjs';
//const dataSource = new ProductData('tents');

//const productId = getParam('product');

//console.log(dataSource.findProductById(productId));
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";
import ProductDetails from "./ProductDetails.mjs";

const dataSource = new ProductData("tents");
const productId = getParam("product");

const product = new ProductDetails(productId, dataSource);
product.init();
