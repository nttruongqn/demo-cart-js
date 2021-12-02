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
import { arrayExpression } from "@babel/types";
import { getAllProductByPamram, getAllProducts, getAllSize } from "../../services/productServices";

 class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: 'ALL',
      size:'ALL',
      dataProductSize: [],
      oldDataProduct:[],
      listSize: [],
      cartItems: localStorage.getItem("cartItems")
        ? JSON.parse(localStorage.getItem("cartItems"))
        : [],
    };
  }

   async componentDidMount() {
    //  let resOld = await getAllProducts();
    //  this.setState({
    //    oldDataProduct:resOld.data
    //  })
    this.props.getAllProduct();
    let res = await getAllProductByPamram({
       size: this.state.size,
      sort:this.state.sort,
    });
    console.log("check res dataparam", res);

    let resSize = await getAllSize();
    let dataSize = resSize.data;
    if (dataSize && dataSize.length > 0) {
      dataSize.unshift({
        size: "ALL",
        valueVi: "Tất cả"
      });
    }
      this.setState({
        dataProductSize:res.data,
        listSize: dataSize ? dataSize : [],
        
    });
    console.log("res size", res);

  
  }

  componentDidUpdate(prevProps, prevState) {
    
   }


   handleOnChangeInput = (event) => {
    //  let sort = event.target.value;
    //  return sort
   
   }


   handleOnChangeSort = async (event) => {
     let sort = event.target.value;
     console.log('check sort', sort)
    
     if (this.state.size === "ALL") {
      let res = await getAllProductByPamram({
        size: "ALL",
        sort: sort,
      })
      this.setState({
        sort:sort
      })
       console.log('check size,sort', this.state.size, sort);
       console.log('check res sort', res);
       if (res && res.errCode === 0) {
         this.setState({
           dataProductSize:res.data
         })
       }
     } else {
       let size = this.state.size;
       let sort = event.target.value;
       this.setState({
         sort: sort,
         size:size,
       })
       console.log('check size,sort NA:',size,sort)
       let resNA = await getAllProductByPamram({ 
         size: size,
         sort: sort
       })
       console.log('check res not ALL: ',resNA)
     
       if (resNA && resNA.errCode === 0) {
        this.setState({
          dataProductSize:resNA.data
        })
      }
     }
      
   }
   

   
   handleOnChangeSelect = async (event) => {
   
     let size = event.target.value;
     this.setState({
       size: size,
     })
     console.log('check event size: ',size)


     if (this.state.sort === "ALL") {
      let res = await getAllProductByPamram({
        size: size,
        sort:this.state.sort
      })
      console.log('check res size',res)
      if (res && res.errCode === 0) {
        this.setState({
          dataProductSize:res.data
        })
      }
     } else {
       let size = event.target.value;
       let sort = this.state.sort;
       this.setState({
        size: size,
        sort:sort
       })
       let resNA = await getAllProductByPamram({ 
        size: size,
        sort: sort
      })
      console.log('check res not ALL: ',resNA)
    
      if (resNA && resNA.errCode === 0) {
       this.setState({
         dataProductSize:resNA.data
       })
     }
     }
   
   
     
     
  }


  createOrder = (order) => {
    alert("check order: " + order.name);
  };

  //  sortProducts = async(event) => {
  
   
  //    let sort = event.target.value;
  //    if (event.target.value === "") {
  //     this.setState({
  //       sort: sort,
  //       dataProductSize: this.state.oldDataProduct,
  //     });
  //   } else {
  //     this.setState({
  //       sort: sort,
  //       dataProductSize: this.state.dataProductSize
  //         .slice()
  //         .sort((a, b) =>
  //           sort === "highest"
  //             ? a.price < b.price
  //               ? 1
  //               : -1
  //             : sort === "lowest"
  //             ? a.price > b.price
  //               ? 1
  //               : -1
  //             : sort === "latest"
  //             ? a.id < b.id
  //               ? 1
  //               : -1
  //             : 0
  //         ),
  //     });
  //   }

  //   console.log(event.target.value);
  //  };
   
  
  

  // filterProducts = (event) => {
  //   console.log("check event:", event.target.value);
    // let arr = this.props.productData;
    // let arrSize = [];
    // if(arr && arr.length>0) arr.map((item)=>arrSize.push(item.sizeData.map(item=>item.so)));
    // console.log('check arr',arrSize)
    // let sizeDa = arr.map((item)=>item.sizeData)
    

  //   if (event.target.value === "") {
  //     this.setState({
  //       size: event.target.value,
  //       products: this.state.products,
  //     });
  //   } else {
  //     this.setState({
  //       size: event.target.value,
  //       products: this.state.products.filter(
  //         (x) => x.sizeData.map((item)=>item.size).indexOf(event.target.value) >= 0
  //       ),
  //     });
  //   }
  //   console.log('check',this.state.products.filter(
  //     (x) => x.sizeData.map((item)=>item.size)))
  // };

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
                    sort = {this.state.sort}
                    sortProducts = {this.sortProducts}
                    listSize={this.state.listSize}
                    dataProductSize={this.state.dataProductSize}
                    handleOnChangeInput={this.handleOnChangeInput}
                    handleOnChangeSelect={this.handleOnChangeSelect}
                    handleOnChangeSort={this. handleOnChangeSort}
                  />
                  <Product
                    products={this.state.dataProductSize}
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