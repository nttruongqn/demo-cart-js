import React, { Component } from "react";
import FormatCurrency from "../../../utils/FormatCurrency";
import Fade from "react-reveal/Fade";
import Modal from "react-modal";
import Zoom from "react-reveal/Zoom";
import "./Product.scss";
import {
  fetchAllProduct,
  fetchProduct,
} from "../../../store/actions/productActions";
import { connect } from "react-redux";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: null,
   
    };
  }

  openModal = (product) => {
    this.setState({
      product,
    });
  };
  closeModal = () => {
    this.setState({
      product: null,
    });
  };

  componentDidMount() {
  
  }

  // componentDidUpdate(prevProps, prevState, snapshot) {
  //   if (prevProps.productRedux !== this.props.productRedux) {
  //     this.setState({
  //       productData: this.props.productRedux.products
  //     })
  //   }
  // }
  render() {
    let { product } = this.state;
  
    let { handleAddToCart,products } = this.props;

    // console.log("check props by redux", this.props);
    return (
      <>
        <Fade bottom cascade>
          <div className="product-container">
          
            <span className="heading-product">Danh sách sản phẩm</span>
            <div className="product-list">
              {!products ? (
                <div> Loading.... </div>
              ) : (
                <div className="grid-row">
                  {products &&
                    products.length > 0 &&
                    products.map((item, index) => {
                      return (
                        <div className="grid-column-4-7" key={item.id}>
                        
                          <div className="product-item">
                            <img src={item.image} alt="" />
                            <a
                              href={"#" + item.id}
                              className="title"
                              onClick={() => this.openModal(item)}
                            >
                              {item.title}
                            </a>
                            <div className="p-c">
                              <div className="price">
                                <span>{FormatCurrency(item.price)}</span>
                              </div>
                              <div className="add-cart">
                                <button onClick={() => handleAddToCart(item)}>
                                  Thêm vào giỏ
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </Fade>

        {product && (
          <Modal isOpen={true} onRequestClose={this.closeModal}>
            <Zoom>
              <button className="modal-close" onClick={this.closeModal}>
                X
              </button>
              <div className="product-details-container">
                <div className="product-detail-main">
                  <div className="product-detail-img">
                    <img src={product.image} alt="" />
                  </div>
                  <div className="product-detail-descriptions">
                    <p>
                      <strong>{product.title}</strong>
                    </p>
                    <p>{product.description}</p>
                    <p>
                      Chọn size:{" "}
                      {product.availablesSizes.map((item) => (
                        <button className="btn-size">{item}</button>
                      ))}
                    </p>
                    <div className="product-price-p">
                      <p>
                        <strong>{FormatCurrency(product.price)}</strong>
                      </p>
                      <button
                        className="btn-p"
                        onClick={() => {
                          handleAddToCart(product);
                          this.closeModal();
                        }}
                      >
                        Thêm vào giỏ
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Zoom>
          </Modal>
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
 
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);