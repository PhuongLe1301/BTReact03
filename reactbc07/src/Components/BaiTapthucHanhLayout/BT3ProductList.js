import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class BT3ProductList extends Component {
    render() {
        return (
            <div className="row">
                    <div className="col-3">
                        <ProductItem/>
                    </div>
                    <div className="col-3">
                        <ProductItem/>
                    </div>
                    <div className="col-3">
                        <ProductItem/>
                    </div>
                    <div className="col-3">
                        <ProductItem/>
                    </div>
                </div>
        )
    }
}
