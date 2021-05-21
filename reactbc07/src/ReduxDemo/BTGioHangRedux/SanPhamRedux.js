import React, { Component } from 'react'
//Kết nối component với redux store
import {connect} from 'react-redux'

 class SanPhamRedux extends Component {

    render() {
        const { sanPham } = this.props;
        console.log(this.props)
        return (
            <div className="card text-white bg-dark">
                <img className="card-img-top" style={{height:300}} src={sanPham.hinhAnh} alt={sanPham.hinhAnh} />
                <div className="card-body">
                    <h4 className="card-title">{sanPham.tenSP}</h4>
                    <p className="card-text">{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-success" onClick={()=>{
                        console.log(sanPham)
                        this.props.themGioHang(sanPham)
                    }}>Thêm giỏ hàng</button>
                </div>
            </div>

        )
    }
}

//Hàm sinh ra props là hàm xử lý để đưa dữ liệu lên redux

const mapDispatchToProps = (dispatch)=>{
    //dispatch giống hàm setState
    return {
        themGioHang:(spClick)=>{
            console.log(spClick)
            //action là 1 obj chứa dữ liệu gửi lên redux store
            const action={
                type:'THEM_GIO_HANG',
                spGioHang:{...spClick,soLuong:1}
            }
            //Sử dụng hàm dispatch để gửi dữ liệu lên redux
            dispatch(action);
        }
    }
}


export default connect(null,mapDispatchToProps)(SanPhamRedux)