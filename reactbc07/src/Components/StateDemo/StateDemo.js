import React, { Component } from 'react'

export default class StateDemo extends Component {

    
    userName = 'Phương';
    state = {
        //state: thuộc tính chứa các giá trị bị thay đổi khi người dùng thao tác (click,change,blur ...)
        isLogin : false
    }

    renderLogin =() =>{
        if(this.state.isLogin===true){
            return <span>Hello {this.userName}</span>
        }
        else{
            return    <button className="btn btn-outline-success" type="button" onClick={(event)=>{
                //khi click vào nút button sẽ gọi hma login
                this.Login();
            }}>Đăng nhập</button>
        }
    }

    Login=()=>{
        // let newState={
        //     isLogin:true
        // }
        this.setState({
            isLogin:true
    
        }, function(){
            //function này sẽ chạy sau khi công việc setState sử lý xong
            console.log('state',this.state)
        })//this.setState là phương thức có sẵn của React class Component dùng để thay đổi giá trị của thộc tính state đồng thời cho phép giao diện render lại
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="dropdownId" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
                                <div className="dropdown-menu" aria-labelledby="dropdownId">
                                    <a className="dropdown-item" href="#">Action 1</a>
                                    <a className="dropdown-item" href="#">Action 2</a>
                                </div>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <li className="nav-item text-white">
                                {/* {this.isLogin===true ? <span>Hello {this.userName}</span>:<button className="btn btn-outline-success">Đăng nhập</button>} */}
                                {this.renderLogin()}
                            </li>
                        </form>
                    </div>
                </nav>

            </div>
        )
    }
}
