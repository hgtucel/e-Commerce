import React, { useEffect } from "react";
import { Table, Badge } from "reactstrap";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Button } from "reactstrap";
import { Link } from "react-router-dom";
export const CartScreen = ({ match, location }) => {
  const productId = match.params.id;
  const qty = location.search ? Number(location.search.split("=")[1]) : 1; //?qty=5
   
  const cart = useSelector(state=>state.cartReducer);
  const {cartItems} = cart;

  const dispatch = useDispatch();
  const removeFromCartHandler = (productId)=>{
    dispatch(removeFromCart(productId));
  }  
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, qty));
    }
  }, []);

  return (
    <div>
      <h3>Cart</h3>
      <Row>
        <Col xs="9">
          {cartItems.length === 0 ? (
            <div>Cart is empty.</div>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>#</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <tr>
                    <th><img src={item.image} width="100" height="100" alt=""/></th>
                    <td>{item.product}</td>
                    <td><Link to={`/products/${item.product}`}>{item.name}</Link></td>
                    <td>
                        <select>
                            <option value="1">1</option>
                        </select>
                        <Badge color="danger" onClick={()=>removeFromCartHandler(item.product)}>X</Badge>
                    </td>
                    <td>{item.price}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
        <Col xs="3">
                <h4>Sub Total ({cartItems.reduce((a,c)=>a + c.qty,0)} items) ${cartItems.reduce((a,c)=> a + c.price * c.qty, 0)}</h4>
                <Button color="secondary" disabled={cartItems.length === 0}>Checkout</Button>
        </Col>
      </Row>
    </div>
  );
};
