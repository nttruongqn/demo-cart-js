import { connect } from "react-redux";
import React, { Component } from 'react'
import './Filter.scss'

class Filter extends Component {
   
   

    render() {
        let { count, size, sort, filterProducts, sortProducts } = this.props;
        console.log('check product data',this.props.productData)
        return (
            <div className="filter">
                <div className="filter-result"><span>{count} Sản Phẩm</span> </div>
                <div className="filter-sort">
                    Order  <select value={sort} onChange={sortProducts}>
                    <option value="">
                            Tất cả
                        </option>
                    <option value="latest">
                            Mới nhất
                        </option>
                        <option value="lowest">
                            Thấp đến cao
                        </option>
                        <option value="highest">
                            Cao đến thấp
                        </option>
                    </select>
                </div>

                <div className="filter-size">
                    Chọn size {""}
                    <select value={size}
                    onChange={filterProducts}>
                        <option value="">
                            Tất cả
                        </option>
                        <option value="XXL">
                            XS
                        </option>
                        <option value="XL">
                            L
                        </option>
                        <option value="S">
                            S
                        </option>
                    </select>
                </div>

            </div>
        )
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(Filter);