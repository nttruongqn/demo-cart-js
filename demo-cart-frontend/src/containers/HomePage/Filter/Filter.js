import { connect } from "react-redux";
import React, { Component } from "react";
import "./Filter.scss";
import {
  getAllProductByPamram,
  getAllProducts,
  getAllSize,
} from "../../../services/productServices";
import Product from "../Product/Product";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // dataProductSize: [],
      // listSize: [],
  
    };
  }

  

  // async componentDidMount() {
  //   let res = await getAllProductByPamram({
  //     size: "ALL",
  //   });
  //   console.log("check res dataparam", res);

  //   let resSize = await getAllSize();
  //   let dataSize = resSize.data;
  //   if (dataSize && dataSize.length > 0) {
  //     dataSize.unshift({
  //       size: "Tất cả",
  //     });
  //   }
  //     this.setState({
  //       dataProductSize:res.data,
  //       listSize: dataSize ? dataSize : [],
        
  //   });
  //   console.log("res size", res);
  // }


 

  // handleOnChangeSelect = async(event) => {
  //   let size = event.target.value;

  //   let res = await getAllProductByPamram({
  //     size: size
  //   })
  //   console.log('check res size', res);
  //   if (res && res.errCode === 0) {
  //     this.setState({
  //       dataProductSize:res.data
  //     })
  //   }
  // }


  render() {
    let { listSize, dataProductSize, handleOnChangeSelect,handleOnChangeInput, handleOnChangeSort } = this.props;
    console.log('check listSize',listSize)
   console.log('check props',this.props)
  
    return (
      <>
      <div className="filter">
        <div className="filter-result">
          <span>{dataProductSize.length} Sản Phẩm</span>{" "}
        </div>
        <div className="filter-sort">
          Order{" "}
            <select  onChange={(event)=> handleOnChangeSort(event)}>
            <option  value="ALL">Tất cả</option>
            <option  value="latest">Mới nhất</option>
            <option  value="lowest">Thấp đến cao</option>
            <option  value="highest">Cao đến thấp</option>
          </select>
        </div>

        <div className="filter-size">
          Chọn size {""}
          <select onChange={(event) => handleOnChangeSelect(event)}>
            {listSize &&
              listSize.length > 0 &&
              listSize.map((item, index) => {
                return (
                  <option key={index} value={item.size}>
                    {item.valueVi}
                  </option>
                );
              })}
          </select>
        </div>
      </div>
        
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
