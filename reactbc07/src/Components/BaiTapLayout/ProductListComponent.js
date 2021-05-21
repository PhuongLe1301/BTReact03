import React, { Component } from 'react'
import BTProduct from './BTProduct'

export default class ProductListComponent extends Component {
     dataProduct =   [
        { maSP: 1, tenSP: 'Black Berry',hinhAnh:'./img/sp_blackberry.png', gia: 1000 },
        { maSP: 2, tenSP: 'Iphone X',hinhAnh:'./img/sp_iphoneX.png', gia: 2000 },
        { maSP: 3, tenSP: 'Note 7',hinhAnh:'./img/sp_note7.png', gia: 3000 },
        { maSP: 3, tenSP: 'Vivo 850',hinhAnh:'./img/sp_vivo850.png', gia: 3000 }
        ]

        renderProduct = () => {
            return this.dataProduct.map((item, index) => {
                return <div className="col-3">
                        <BTProduct product={item}/>
                    </div>
            })
        }
    render() {
        return (
            <div className="container-fluid bg-dark">
                <section id="smartphone" className="container-fluid pt-5 pb-5">
                <h1 className="text-white text-center">BEST SMARTPHONE</h1>
                </section>
                <div className="row">
                   {this.renderProduct()}
                </div>
            </div>
            
        )
    }
}