import Button from "react-bootstrap/Button";
import { withRouter } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

import { connect } from 'react-redux'

// const mapStateToProps = (state) => state
// mapStateToProps is a function returning an object
// const mapStateToProps = (state) => {
//   return {
//     ...state
//     // with the spread operator you're taking all the properties from state
//     // and create a new object out of them
//   }
// }

// const mapStateToProps = (state) => ({
//   cartLength: state.cart.products.length
// })

const mapStateToProps = state => {
  return state
}

const CartIndicator = (props) => (
  <div className="ml-auto mt-2">
    <Button color="primary" onClick={() => props.history.push("/cart")}>
      <FaShoppingCart />
      <span className="ml-2">{props.cart.products.length}</span>
    </Button>
  </div>
);

export default connect(mapStateToProps)(withRouter(CartIndicator));
