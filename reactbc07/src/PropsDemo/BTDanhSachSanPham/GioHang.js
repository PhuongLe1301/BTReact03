import React, { Component } from 'react'
import SanPham from './SanPham';

export default class GioHang extends Component {
   
    // amountLength=(item)=>{
    //     console.log(item)
    //     this.setState({
    //         gioHang: item.soLuong++
    //     })
    // }
    // amountLengthMinus=(item)=>{
    //     console.log(item)
    //     this.setState({
    //         gioHang: item.soLuong--
    //     })
    // }

    

    renderGioHang= ()=>{
        let {gioHang} = this.props;
        return gioHang.map((item,index)=>{
            return <tbody>
            <tr>
                <td>{item.maSP}</td>
                <td><img src={item.hinhAnh} width={50} height={50}/></td>
                <td>{item.tenSP}</td>
                <td>
                    <button className="btn btn-success" onClick={()=>{this.props.tangGiamSL(item.maSP,1)}}>+</button>
                    {item.soLuong}
                    <button className="btn btn-success"  onClick={()=>{this.props.tangGiamSL(item.maSP,-1)}}>-</button>
                </td>
                <td>{item.giaBan.toLocaleString()}</td>
                <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
                <td><button className="btn btn-danger" onClick={()=>{this.props.xoaSP(item.maSP)}}>Xóa</button></td>
            </tr>
        </tbody>
        })
    }

    tinhTongSoLuong= ()=>{
        let tongSL=0;
        for(let spGH of this.props.gioHang){
            tongSL += spGH.soLuong;
        }
        return tongSL;
    }

    render() {
        return (
            <div className="container">
                <div>
                    <div className="text-right">
                        <i className="fa fa-cart-plus" />({this.tinhTongSoLuong()})
                    </div>
                </div>
            <table className="table">
                <thead>
                    <tr>
                        <th>Mã sp</th>
                        <th>Hình ảnh</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Gía bán</th>
                        <th>Tổng tiền</th>
                        <th></th>
                    </tr>
                </thead>
                {this.renderGioHang()}
            </table>

            </div>
        )
    }
}
