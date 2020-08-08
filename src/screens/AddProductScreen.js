import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import { saveProduct} from "../redux/actions/productActions";
import { useState } from "react";
import { useEffect } from "react";

export const AddProductScreen = () => {
  const [name, setName] = useState("");
  const [price,setPrice] = useState("");
  const [image,setImage] = useState("");
  const [brand,setBrand] = useState("");
  const [category,setCategory] = useState("");
  const [countInStock, setCountInStock] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [numReview, setNumReview] = useState("");

  const productSave = useSelector((state) => state.saveProductReducer);
  const {loading: loadingSave, success: successSave, error: errorSave} = productSave;
  
  const dispatch = useDispatch();

    useEffect(()=>{
        
    },[]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveProduct({name,price,image,brand,category,countInStock,description}));
  };

  return (
    <Form onSubmit={submitHandler}>
      <FormGroup>
        <Input
          type="text"
          name="name"
          placeholder="Name"
          onChange={(e)=>setName(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="price"
          placeholder="Price"
          onChange={(e)=>setPrice(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="image"
          placeholder="Image"
          onChange={(e)=>setImage(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={(e)=>setBrand(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="category"
          placeholder="Category"
          onChange={(e)=>setCategory(e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Input
          type="text"
          name="countInStock"
          placeholder="Count In Stock"
          onChange={(e)=>setCountInStock(e.target.value)}
        />
      </FormGroup>
    
      <Button>Add Product</Button>
    </Form>
  );
};
