import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {
        let {item} =this.props;
        return (
            <div>
                <img className="card-img-top" src={item.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <button type="button" class="btn btn-success" onClick={()=>{
                        this.props.xemChiTiet(item)
                    }}>Xem Chi Tiet</button>
                    <button className="btn btn-primary ml-4" onClick={()=>{this.props.themGioHang(item)}}>Thêm Giỏ Hàng</button>
                </div>
            </div>
        )
    }
}
