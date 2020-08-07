import React, { useEffect } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Row,
  Col,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../redux/actions/productActions";
import { Link } from "react-router-dom";
export const HomeScreen = (props) => {
  const productList = useSelector((state) => state.productListReducer);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(listProducts());
  }, []);

  return (
    loading ? <div>Loading....</div> :
    error ? <div>{error}</div> :
    <div>
      <Row>
        {products.map((item) => (
          <Col key={item._id} xs="4">
            <Card>
              <CardImg
                top
                width="100%"
                src={item.image}
                alt="Card image cap"
              />
              <CardBody>
                <Link to={`/product/${item._id}`}><CardTitle>{item.name}</CardTitle></Link>
                <CardSubtitle>{item.category}</CardSubtitle>
                <Button>Button</Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
