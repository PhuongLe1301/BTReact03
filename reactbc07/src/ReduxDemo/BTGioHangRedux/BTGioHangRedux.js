import React, { Component } from 'react'

//kết nối redux store
import {connect} from 'react-redux';

 class BTGioHangRedux extends Component {
    render() {

        return (
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
                <tbody>
                    {this.props.gioHang.map((spGioHang,index)=>{
                        return <tr key={index}>
                            <td>{spGioHang.maSP}</td>
                            <td><img src={spGioHang.hinhAnh} width={50} height={50}/></td>
                            <td>{spGioHang.tenSP}</td>
                            <td>
                                <button className="mr-2" onClick={()=>{this.props.tangGiamSoLuong(spGioHang.maSP,1)}}>+</button>
                                {spGioHang.soLuong}
                                <button className="mr-2" onClick={()=>{this.props.tangGiamSoLuong(spGioHang.maSP,-1)}}>-</button>
                                </td>
                            <td>{spGioHang.giaBan}</td>
                            <td>{spGioHang.soLuong * spGioHang.giaBan}</td>
                            <td><button className="btn btn-danger" onClick={()=>{
                                this.props.xoaGioHang(spGioHang.maSP)
                            }}>Xoa</button></td>
                        </tr>
                    })}
                </tbody>
            </table>
        )
    }
}


//Đây là hàm lấy state từ redux (rootReducer)=> biến thành props của component
const mapStateToProps = (rootReducer)=>{
    console.log('rootReducer',rootReducer)
    return{
        gioHang:rootReducer.stateGioHang
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        xoaGioHang: (maSPClick)=>{
            console.log(maSPClick);
            const action={
                type:'XOA_GIO_HANG',
                maSP: maSPClick
            }
            dispatch(action)
        },
        tangGiamSoLuong: (maSPClick,soLuong)=>{
            const action={
                type:'TANG_GIAM_SO_LUONG',
                soLuong:soLuong,
                maSPClick:maSPClick
            }
            dispatch(action)
        }
    }
}

//Tạo ra component mới có kết nối với store từ Component hiện tại
const GioHangConnectRedux=connect(mapStateToProps,mapDispatchToProps)(BTGioHangRedux)

export default GioHangConnectRedux;