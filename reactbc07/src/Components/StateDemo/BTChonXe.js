import React, { Component } from 'react'

export default class BTChonXe extends Component {

    state={
        imgSrc : "./img/car/products/black-car.jpg"
    }

    changeColor=(color)=>{
        this.setState({
            imgSrc:`./img/car/products/${color}-car.jpg`
        })
    }

    render() {
        return (
            <div className="container-fluid">
                <h3 className="text-center display-4">Bài tập chọn xe (STATE)</h3>
                <div className="row">
                    <div className="col-4"> 
                        <img className="w-100" src={this.state.imgSrc} alt="123"/>
                    </div>
                    <div className="col-8">
                        <div className="row">
                            <div className="col-3">
                                <button className="bg-dark btn" onClick={()=>{
                                    this.changeColor('black');
                                    
                                }}>Black Color</button>
                            </div>
                            <div className="col-3">
                                <button className="bg-danger btn" onClick={()=>{
                                    this.changeColor('red');
                                }}>Red Color</button>
                            </div>
                            <div className="col-3">
                                <button className="bg-secondary btn" onClick={()=>{
                                    this.changeColor('silver');
                                }}>Silver Color</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
