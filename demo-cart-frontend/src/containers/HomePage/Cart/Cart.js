import React, { Component } from "react";
import FormatCurrency from "../../../utils/FormatCurrency";
import Fade from "react-reveal";
import "./Cart.scss";

export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      address: "",
      showCheckout: false,
    };
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });

    console.log("check state", this.state);
  };

  createOrder = () => {
    let { name, email, address } = this.state;
    let { cartItems, createOrder } = this.props;
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
      total: cartItems.reduce((a, c) => a + c.price * c.count, 0),
    };
    createOrder(order);
  };

  render() {
    const { cartItems, removeCart } = this.props;
    let { name, email, address, showCheckout } = this.state;
    // console.log("check state", this.state);
    // console.log("check props", this.props);
    return (
      <>
        <Fade right cascade>
          <div className="cart">
            <div className="cart-heading">
              {cartItems.length === 0 ? (
                <div className="cart cart-header">
                  <span>Cart is Empty</span>
                </div>
              ) : (
                <div className="cart cart-header">
                  <span>Bạn có {cartItems.length} đơn đặt hàng </span>
                </div>
              )}
            </div>
            <div className="cart-list">
              {cartItems.map((item) => {
                return (
                  
                    <div className="cart-items" key={item.id}>
                      <div className="cart-img">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="title-bd">
                        <div className="cart-title">{item.title}</div>

                        <div className="price-d">
                          {FormatCurrency(item.price)} x {item.count}
                          <button onClick={() => removeCart(item)}>Xóa</button>
                        </div>
                      </div>
                    </div>
                  
                );
              })}
            </div>

            {cartItems && cartItems.length > 0 && (
              <>
                <div className="cart-total">
                  <div className="total">
                    Tổng:
                    {FormatCurrency(
                      cartItems.reduce((a, c) => a + c.price * c.count, 0)
                    )}
                  </div>

                  <div className="b-payment">
                    <button
                      onClick={() => {
                        this.setState({
                          showCheckout: true,
                        });
                      }}
                    >
                      Thanh toán
                    </button>
                  </div>
                </div>
                {showCheckout === true && (
                  <>
                    <Fade right cascade>
                      <div className="cart-form">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            type="email"
                            required
                            name="email"
                            placeholder="Nhập email"
                            value={email}
                            onChange={this.handleInput}
                          />
                        </div>

                        <div className="form-group">
                          <label>Tên</label>
                          <input
                            type="text"
                            required
                            name="name"
                            placeholder="Nhập Tên"
                            value={name}
                            onChange={this.handleInput}
                          />
                        </div>

                        <div className="form-group">
                          <label>Địa chỉ</label>
                          <input
                            type="text"
                            required
                            name="address"
                            placeholder="Nhập địa chỉ"
                            value={address}
                            onChange={this.handleInput}
                          />
                        </div>

                        <button
                          type="button"
                          onClick={() => this.createOrder()}
                        >
                          Đặt hàng
                        </button>
                      </div>
                    </Fade>
                  </>
                )}
              </>
            )}
          </div>
        </Fade>
      </>
    );
  }
}
