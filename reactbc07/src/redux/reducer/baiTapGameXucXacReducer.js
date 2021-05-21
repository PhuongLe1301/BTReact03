

const stateDefaultGame = {
    ketQuaChon: false, //false là xỉu,true là tài
    soBanThang: 1,
    tongSoBanChoi: 0,
    mangXucXac: [
        { hinhAnh: './img/imgGame/1.png', diem: 1 },
        { hinhAnh: './img/imgGame/1.png', diem: 1 },
        { hinhAnh: './img/imgGame/1.png', diem: 1 },
    ]
}

export const baiTapGameXucXacReducer = (state = stateDefaultGame, action) => {
    switch (action.type) {
        case 'CHON_TAI_XIU': {
            state.ketQuaChon = action.ketQuaChon;
            console.log('state', state)
            //tính chất bất biến (immutable) của redux đối với kiểu dữ liệu là object hoặc array => chép ra object array mới 
            return { ...state };
        }
        case 'PLAY_GAME': {
            let mangXXNN = [];
            //Random 3 lần để tạo ra 3 xúc xắc ngẫu nhiên
            for (var i = 1; i <= 3; i++) {
                //tạo ra 1 con số ngẫu nhiên 
                let soNN = Math.floor(Math.random() * 6) + 1;
                //từ số ngẫu nhiên tạo ra 1 obj xúc xắc
                let xxnn = { hinhAnh: `./img/imgGame/${soNN}.png`, diem: soNN }
                mangXXNN.push(xxnn);
            }
            state.mangXucXac = mangXXNN;
            //tính điểm vả trả kết quả
            var tongDiem=mangXXNN.reduce((diem,xxnn,index)=>{
                return diem+=xxnn.diem;
            },0)

            //so sánh và xử lý kết quả
            if((tongDiem>11 && state.ketQuaChon === true) || (tongDiem <=11 && state.ketQuaChon === false)){
                state.soBanThang+=1;
            }

            state.tongSoBanChoi+=1;
            return { ...state }
        }
    }
    return state;
};