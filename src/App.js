import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { BrowserRouter, Route, Link } from "react-router-dom";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductScreen } from "./screens/ProductScreen";
import { CartScreen } from "./screens/CartScreen";
import { SignInScreen } from "./screens/SignInScreen";
import { useSelector } from "react-redux";
import { RegisterScreen } from "./screens/RegisterScreen";
import { AddProductScreen } from "./screens/AddProductScreen";
import { ProductListScreen } from "./screens/ProductListScreen";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const userSignIn = useSelector((state) => state.signInReducer);
  const { userInfo } = userSignIn;

  return (
    <BrowserRouter>
      <Container>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              {userInfo ? (
                <NavItem>
                  <Link to="/profile">{userInfo.name}</Link>
                </NavItem>
              ) : (
                <NavItem>
                  <NavLink href="/components/">Sign In</NavLink>
                </NavItem>
              )}
              <NavItem>
                <Link to="/products">Product List</Link>
              </NavItem>
              <NavItem>
                <Link to="/register">Register</Link>
              </NavItem>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
        <Route path="/sigin" component={SignInScreen} />
        <Route path="/register" component={RegisterScreen} />
        <Route path="/addProduct" component={AddProductScreen} />
        <Route path="/products" component={ProductListScreen} />
        <Route path="/product/:id" component={ProductScreen} />
        <Route path="/cart/:id?" component={CartScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Container>
    </BrowserRouter>
  );
}

export default App;
