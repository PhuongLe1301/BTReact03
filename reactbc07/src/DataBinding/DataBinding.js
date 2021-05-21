import React, { Component } from 'react'

export default class DataBinding extends Component {
    //Ngoài phương thức là các thuộc tính và phương thức khác
    sinhVien = {
        maSV: "sv01",
        tenSV: "Nguyen Van A"
    }
    renderProduct = ()=>{
        const product={
            id: 1,
            name:'Iphone',
            img:'./img/sp_iphoneX.png',
            price:1000
        }
        return <div className="card text-white bg-primary">
  <img className="card-img-top" src='./img/sp_iphoneX.png' alt />
  <div className="card-body">
    <h4 className="card-title">{product.name}</h4>
    <p className="card-text">{product.price}</p>
  </div>
</div>

    }
    render() {
        //Khai báo biến trong phương thức
        const title = "cybersoft";
        const imgSrc = "https://picsim.photos/200"
        return (
            <div className="container">
                <h1>Data Binding</h1>
                <p id="title">{title}</p>
                <img src={imgSrc} />
                <br />
                <div className="card text-white bg-primary">
                    <img className="card-img-top" src="https://picsim.photos/200" alt />
                    <div className="card-body">
                        <h4 className="card-text">Họ tên {this.sinhVien.tenSV}</h4>
                        <p className="card-text">Mã {this.sinhVien.maSV}</p>
                    </div>
                </div>
                {this.renderProduct()}
            </div>
        )
    }
}
