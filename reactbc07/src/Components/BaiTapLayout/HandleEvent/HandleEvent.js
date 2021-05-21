import React, { Component } from 'react'

export default class HandleEvent extends Component {
    handle= (name)=>{
        alert(`Hello ${name}`)
    }
    handle2=(e)=>{
        this.handle('Phương');
    }
    render() {
        return (
            <div className="container">
                {/* Cách 1 : sử dụng arrow function khai báo xử lý sự kiện */}
                <button id="btn" className="btn btn-danger" onClick={(e)=>{
                    // e.target.id: // e.target là chính thẻ xảy ra sự kiện
                    // alert(e.target.className)
                    // alert('Cybersoft');
                    this.handle('Phương');
                }}>Click</button>
                 {/* Cách 1 : sử dụng arrow function khai báo xử lý sự kiện */}
                 <button id="btn" className="btn btn-danger" onClick={this.handle2}>Click2</button>
            </div>
        )
    }
}
