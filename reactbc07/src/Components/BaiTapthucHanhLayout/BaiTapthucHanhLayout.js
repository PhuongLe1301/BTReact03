import React, { Component } from 'react'
import BT3Content from './BT3Content'
import BT3Header from './BT3Header'
import Footer from './Footer'

export default class BaiTapthucHanhLayout extends Component {
    render() {
        return (
            <div>
                <BT3Header />
                <BT3Content />
                <Footer />
            </div>
        )
    }
}
