import React, { useEffect, useState } from "react";
import {
  Media,
  ListGroup,
  ListGroupItem,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../redux/actions/productActions";
export const ProductScreen = ({ match, history }) => {
  const productDetails = useSelector((state) => state.productDetailsReducer);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`);
  };

  useEffect(() => {
    dispatch(detailsProduct(match.params.id));
  }, []);

  return loading ? (
    <div>Loading.....</div>
  ) : error ? (
    <div>{error}</div>
  ) : (
    <div>
      <Media>
        <Media left href="#">
          <Media object src={product.image} alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>{product.name}</Media>
          <br></br>
          <ListGroup>
            <ListGroupItem>Price: {product.price}$</ListGroupItem>
            <ListGroupItem>Stock: {product.countInStock}</ListGroupItem>
            <ListGroupItem>Category: {product.category}</ListGroupItem>
            <ListGroupItem>
              <Label for="exampleSelect">Quantity</Label>
              <Input
                type="select"
                name="select"
                value={quantity}
                id="exampleSelect"
                onChange={(e) => setQuantity(e.target.value)}
              >
                {[...Array(product.countInStock).keys()].map((item) => (
                  <option key={item + 1} value={item + 1}>
                    {item + 1}
                  </option>
                ))}
              </Input>
            </ListGroupItem>
            <ListGroupItem>
              {product.countInStock > 0 ? (
                <Button color="info" onClick={handleAddToCart}>Add To Cart</Button>
              ) : (
                <Button color="secondary">No Stock</Button>
              )}
            </ListGroupItem>
          </ListGroup>
        </Media>
      </Media>
    </div>
  );
};
