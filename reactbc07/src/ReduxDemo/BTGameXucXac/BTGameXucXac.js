import React, { Component } from 'react'
import KetQuaTroChoi from './KetQuaTroChoi'
import XucXac from './XucXac'
import style from '../../assets/styles/component/BTGameXucXac.module.css'

export default class BTGameXucXac extends Component {
    render() {
        return (
            <div className={`${style.bgGame}`}>
                <h3 className="display-4 text-center pt-5">Bài Tập Game Xúc Xắc</h3>

                <XucXac/>
                <KetQuaTroChoi/>
            </div>
        )
    }
}
