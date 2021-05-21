import React, { Component } from 'react'
import BTHeader from './BTHeader'
import FootTerConponent from './FootTerConponent'
import ProductListComponent from './ProductListComponent'
import SliderConponent from './SliderConponent'

export default class BaiTapLayout extends Component {
    render() {
        return (
            <div className="bg-dark">
                <BTHeader />
                <SliderConponent />
                <ProductListComponent />
                <FootTerConponent />
            </div>
        )
    }
}
