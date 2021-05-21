import React, { Component } from 'react'
import { connect } from 'react-redux'

class XucXac extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <button className="btn btn-danger">
                            <div className="display-4 p-5" onClick={() => {
                                //tạo ra obj gửi lên reducer
                                const action = {
                                    type: 'CHON_TAI_XIU',
                                    ketQuaChon: true
                                }
                                //sử dụng hàm dispatch từ redux cung cấp đưa action lên reducer
                                this.props.dispatch(action)
                            }}>Tài</div>
                        </button>
                    </div>
                    <div className="col-4">
                        <img src={this.props.mangXucXac[0].hinhAnh} style={{ width: 50, height: 50 }} />
                        <img src={this.props.mangXucXac[1].hinhAnh} style={{ width: 50, height: 50 }} />
                        <img src={this.props.mangXucXac[2].hinhAnh} style={{ width: 50, height: 50 }} />
                    </div>
                    <div className="col-4">
                        <button className="btn bg-dark text-white">
                            <div className="display-4 p-5" onClick={() => {
                                //tạo ra obj gửi lên reducer
                                const action = {
                                    type: 'CHON_TAI_XIU',
                                    ketQuaChon: false
                                }
                                //sử dụng hàm dispatch từ redux cung cấp đưa action lên reducer
                                this.props.dispatch(action)
                            }}>Xỉu</div>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        mangXucXac: rootReducer.baiTapGameXucXacReducer.mangXucXac,
    }
}

export default connect(mapStateToProps)(XucXac)