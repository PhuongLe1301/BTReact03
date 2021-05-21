import { combineReducers, createStore } from 'redux';

import {baiTapGameXucXacReducer} from './reducer/baiTapGameXucXacReducer';

const stateDefault = [
    {
        "maSP": '1',
        "tenSP": "Iphone",
        "soLuong": 1,
        "hinhAnh": "./img/applephone.jpg",
        "giaBan": 27000000
    },
    {
        "maSP": '2',
        "tenSP": "Iphone2",
        "soLuong": 1,
        "hinhAnh": "./img/applephone.jpg",
        "giaBan": 27000000,
    }
]

const rootReducer = combineReducers({
    //Nơi chứa toàn bộ state của ứng dụng
    stateGioHang: (state = stateDefault, action) => {
        switch (action.type) {
            case 'THEM_GIO_HANG': {
                console.log(action)
                const gioHangUpdate = [...state];
                const index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.spGioHang.maSP);
                if (index !== -1) {
                    gioHangUpdate[index].soLuong += 1;
                }
                else {
                    gioHangUpdate.push(action.spGioHang)
                }
                return gioHangUpdate
            }
            case 'XOA_GIO_HANG': {
                let gioHangUpdate = [...state];
                gioHangUpdate = gioHangUpdate.filter(spGH => spGH.maSP !== action.maSP)
                return gioHangUpdate;
            }
            case 'TANG_GIAM_SO_LUONG': {
                let gioHangUpdate = [...state];
                let index = gioHangUpdate.findIndex(spGH => spGH.maSP === action.maSPClick);
                if (index !== -1) {
                    gioHangUpdate[index].soLuong += action.soLuong;
                    if (gioHangUpdate[index].soLuong < 1) {
                        gioHangUpdate[index].soLuong -= action.soLuong;
                    }
                }
                return gioHangUpdate
            }

        }
        return state
    },
    baiTapGameXucXacReducer:baiTapGameXucXacReducer
});

export const store = createStore(rootReducer);
