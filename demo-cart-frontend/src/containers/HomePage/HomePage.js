import "./Home.scss";
import HomeFooter from "./HomeFooter";
import HomeHeader from "./HomeHeader";
import { Component } from "react";
import { render } from "@testing-library/react";
import Product from "./Product/Product";
import data from "../../data.json";
import Filter from "./Filter/Filter";
import Cart from "./Cart/Cart";
import React from "react";
import { connect } from "react-redux";
import { fetchAllProduct } from "../../store/actions/productActions";

 class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      size: "",
      sort: "",
      count: "",
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }

  componentDidMount() {
    this.props.getAllProduct();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.productData!== prevProps.productData) {
      this.setState({
        products: this.props.productData
      })
     
    }
  }

  createOrder = (order) => {
    alert("check order: " + order.name);
  };

  sortProducts = (event) => {
    let sort = event.target.value;
    if (event.target.value === "") {
      this.setState({
        sort: sort,
        products: data.products,
      });
    } else {
      this.setState({
        sort: sort,
        products: this.state.products
          .slice()
          .sort((a, b) =>
            sort === "highest"
              ? a.price < b.price
                ? 1
                : -1
              : sort === "lowest"
              ? a.price > b.price
                ? 1
                : -1
              : sort === "latest"
              ? a.id < b.id
                ? 1
                : -1
              : 0
          ),
      });
    }

    console.log(event.target.value);
  };

  filterProducts = (event) => {
    console.log("check event:", event.target.value);

    if (event.target.value === "") {
      this.setState({
        size: event.target.value,
        products: data.products,
      });
    } else {
      this.setState({
        size: event.target.value,
        products: data.products.filter(
          (x) => x.availablesSizes.indexOf(event.target.value) >= 0
        ),
      });
    }
  };

  handleAddToCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    let alreadyInCart = false;
    cartItems.forEach((item) => {
      if (item.id === product.id) {
        item.count++;
        alreadyInCart = true;
      }
    });

    ////if (alreadyInCart===false)
    if (!alreadyInCart) {
      cartItems.push({ ...product, count: 1 });
    }
    this.setState({ cartItems });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  removeCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x.id !== product.id),
    });
    localStorage.setItem(
      "cartItems",
      JSON.stringify(cartItems.filter((x) => x.id != product.id))
    );
  };

  render() {
    return (
      <>
        <HomeHeader />
        <div className="home-container">
          <div className="grid">
            <div className="main">
              <div className="grid-row">
                <div className="grid-column-7-12">
                  { console.log('check state homepage',this.state)}
                  <Filter
                    count={this.state.products.length}
                    size={this.state.size}
                    sort={this.state.sort}
                    filterProducts={this.filterProducts}
                    sortProducts={this.sortProducts}
                  />
                  <Product
                    products={this.state.products}
                    handleAddToCart={this.handleAddToCart}
                  />
                </div>
                <div className="grid-column-3-12">
                  <div className="sidebar">
                    <Cart
                      cartItems={this.state.cartItems}
                      removeCart={this.removeCart}
                      createOrder={this.createOrder}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeFooter />
      </>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    productData: state.products.productRedux,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllProduct: () => dispatch(fetchAllProduct()),
  };
};

export default connect(mapStateToProps,mapDispatchToProps)(HomePage)