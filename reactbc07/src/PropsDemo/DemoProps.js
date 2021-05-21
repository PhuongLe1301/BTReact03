import React, { Component } from 'react'
import Product from './Product'

export default class DemoProps extends Component {
    render() {

        let object1 ={
            price:7000,
            id:1,
            title:'Iphone',
            img:'https://picsum.photos/200'
        }
        let object2 ={
            price:2000,
            id:2,
            title:'SamSung',
            img:'https://picsum.photos/200'
        }
        let object3 ={
            price:3000,
            id:3,
            title:'Xiaomi',
            img:'https://picsum.photos/200'
        }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Product product={object1}/>
                        </div>
                        <div className="col-4">
                            <Product title="SamSung" price="2000" product={object2}/>
                        </div>
                        <div className="col-4">
                            <Product title="Xiaomi" price="3000" product={object3}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
