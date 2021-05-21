import React, { Component } from 'react'
//cách 1 import đường dẫn trực tiếp
import './styleDemo.css'
//Cách 2 
import style from './styleDemo.module.css'

export default class StyleDemo extends Component {
    state={
        fontSize:15
    }
    render() {
        return (
            <div className="container">
                <p style={{
                    color:'red',
                    backgroundColor:'black',
                    fontSize:this.state.fontSize
                }} className="text-red">Hello</p>
                <p className={`${style.bgColor} ${style["text-green"]} display-4`}>Cybersoft</p>
                <button onClick={()=>{
                    this.setState({
                        fontSize:this.state.fontSize+1
                    })
                }}>+</button>
            </div>
        )
    }
}
