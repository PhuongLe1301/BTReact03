import React, { Component } from 'react'

export default class RenderWithMap extends Component {
    arrProduct = [
        { id: 1, name: 'Iphone', price: 1000 },
        { id: 2, name: 'IphoneX', price: 2000 },
        { id: 3, name: 'IphoneXS', price: 3000 }
    ]
    renderProduct = () => {
        //Cách 1 :
        // const arrTagJSX = [];
        // for (let i = 0; i < this.arrProduct.length; i++) {
        //     //Mỗi lần duyệt lấy ra 1 obj trong arrProduct
        //     let product = this.arrProduct[i]
        //     let tagJSX = <div className="card text-white bg-primary">
        //         <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
        //         <div className="card-body">
        //             <h4 className="card-title">{product.name}</h4>
        //             <p className="card-text">{product.price}</p>
        //         </div>
        //     </div>
        //     arrTagJSX.push(tagJSX);
        // }
        // return arrTagJSX;


        //Cách 2:
        return this.arrProduct.map((product,index)=>{
            return <div className="card text-white bg-primary" key={index}>
                    <img className="card-img-top" src="https://picsum.photos/200" alt="123" />
                    <div className="card-body">
                        <h4 className="card-title">{product.name}</h4>
                        <p className="card-text">{product.price}</p>
                    </div>
                </div>
        })
    }
    render() {
        return (
            <div className="container">
                <div className="text-center">Danh sách sản phẩm</div>
                <div className="row">
                    {this.renderProduct()}
                </div>
            </div>
        )
    }
}
