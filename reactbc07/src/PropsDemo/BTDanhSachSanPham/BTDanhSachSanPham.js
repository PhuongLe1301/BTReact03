import React, { Component } from 'react'
import GioHang from './GioHang';
import SanPham from './SanPham';

export default class BTDanhSachSanPham extends Component {
    dataProduct = [
        {
            "maSP": 1,
            "tenSP": "VinSmart Live",
            "manHinh": "AMOLED, 6.2\", Full HD+",
            "heDieuHanh": "Android 9.0 (Pie)",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 5700000,
            "hinhAnh": "./img/vsphone.jpg"
        },

        {
            "maSP": 2,
            "tenSP": "Meizu 16Xs",
            "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels",
            "heDieuHanh": "Android 9.0 (Pie); Flyme",
            "cameraTruoc": "20 MP",
            "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 7600000,
            "hinhAnh": "./img/meizuphone.jpg"
        },

        {
            "maSP": 3,
            "tenSP": "Iphone XS Max",
            "manHinh": "OLED, 6.5\", 1242 x 2688 Pixels",
            "heDieuHanh": "iOS 12",
            "cameraSau": "Chính 12 MP & Phụ 12 MP",
            "cameraTruoc": "7 MP",
            "ram": "4 GB",
            "rom": "64 GB",
            "giaBan": 27000000,
            "hinhAnh": "./img/applephone.jpg"
        }
    ];
    
        state={
            sanPhamChiTiet:{
                "maSP": 1,
                "tenSP": "VinSmart Live",
                "manHinh": "AMOLED, 6.2\", Full HD+",
                "heDieuHanh": "Android 9.0 (Pie)",
                "cameraTruoc": "20 MP",
                "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP",
                "ram": "4 GB",
                "rom": "64 GB",
                "giaBan": 5700000,
                "hinhAnh": "./img/vsphone.jpg"
            },//Luôn có giá trị mặc định ban đầu
            gioHang:[
                // {"maSP":'1',
                // "tenSP":"Iphone",
                // "hinhAnh":"./img/applephone.jpg",
                // "giaBan":27000000},
                // {
                // "maSP":'2',
                // "tenSP":"Iphone2",
                // "hinhAnh":"./img/applephone.jpg",
                // "giaBan":27000000,
                // }
            ]
                
        }
        tangGiamSoLuong= (maSP,soLuong)=>{
            let gioHangCapNhat = this.state.gioHang;
            let index=gioHangCapNhat.findIndex(spGH=>spGH.maSP===maSP);

            if(index !=-1){
                gioHangCapNhat[index].soLuong+=soLuong;
                if(gioHangCapNhat[index].soLuong<1){
                    gioHangCapNhat[index].soLuong-=soLuong;
                    alert("số lượng tối thiểu là 1")
                }
            }
            this.setState({
                gioHang:gioHangCapNhat
            })
        }

        setStateXoaSanPham=(maSPXoa)=>{
            console.log('maSPXoa',maSPXoa);
            let gioHangCapNhat =this.state.gioHang;
            let index = gioHangCapNhat.findIndex(spGH=>spGH.maSP===maSPXoa);
            if(index !==-1){
                gioHangCapNhat.splice(index,1)
            }
            this.setState({
                gioHang:gioHangCapNhat
            })
        }

        //Hàm setState sẽ được định nghĩa tại component chứa state đó
    setStateThemGioHang= (spClick)=>{
        const spGioHang={...spClick,soLuong:1}
        //Dựa vào sản phẩm được click thêm vào mảng giỏ hàng
        let gioHangCapNhat = this.state.gioHang;
        // gioHangCapNhat.push(spGioHang);
        //kiểm tra sản phẩm click có trong giỏ hàng hay ko
        let index =gioHangCapNhat.findIndex(sp=>sp.maSP===spClick.maSP);
        if(index !==-1){
            //tìm thấy
            gioHangCapNhat[index].soLuong +=1;
        }
        else{
            //không tìm thấy 
            gioHangCapNhat.push(spGioHang) 
        }
        this.setState({
            gioHang:gioHangCapNhat
        })
    }

    renderSanPham = () => {
        return this.dataProduct.map((item, index) => {
         return   <div className="col-4">
             {/* Truyền hàm setState là hàm xemChiTiet xuống component sản phẩm thông qua props */}
             <SanPham item={item} xemChiTiet={this.xemChiTiet} themGioHang={this.setStateThemGioHang}/>
             {/* {this.setStateThemGioHang} là hàm đóng vai trò là tham số truyền vào hàm hoặc component khác */}
                {/* <img className="card-img-top" src={item.hinhAnh} alt />
                <div className="card-body">
                    <h4 className="card-title">{item.tenSP}</h4>
                    <button type="button" class="btn btn-success" onClick={()=>{
                        this.xemChiTiet(item)
                    }}>Xem Chi Tiet</button>
                </div> */}
            </div>

        })
    }
    xemChiTiet = (sanPhamClick)=>{
        console.log(sanPhamClick)
        //gọi setState giống hàm Changecolor của bài tập chọn xe
        this.setState({
            sanPhamChiTiet: sanPhamClick//giá trị mới
        })
    }
    render() {
        let{maSP,tenSP,hinhAnh,giaBan,ram,rom,manHinh,cameraSau,cameraTruoc}=this.state.sanPhamChiTiet

        return (
            <div className="container">
                <GioHang gioHang={this.state.gioHang} xoaSP={this.setStateXoaSanPham} tangGiamSL={this.tangGiamSoLuong}/>
                <h3 className="text-center">Danh Sách Sản Phảm</h3>
                <div className="row">
                        {this.renderSanPham()}
                </div>
                <div className="row mt-5">
                <div className="col-4">
                    <h3 className="text-center">
                        Iphone
                    </h3>
                    <img src={this.state.sanPhamChiTiet.hinhAnh} style={{width:'100%'}}></img>
                </div>
                <div className="col-8">
                    <h3 className="text-center">Thông tin sản phẩm</h3>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Tên sản phẩm</th>
                                <th>{tenSP}</th>
                            </tr>
                            <tr>
                                <th>Màn Hình</th>
                                <th>{manHinh}</th>
                            </tr>
                            <tr>
                                <th>Camera trước</th>
                                <th>{cameraTruoc}</th>
                            </tr>
                            <tr>
                                <th>Camera sau</th>
                                <th>{cameraSau}</th>
                            </tr>
                        </thead>
                    </table>
                </div>
                </div>
            </div>
        )
    }
}
