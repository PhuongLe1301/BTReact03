import logo from './logo.svg';
import './App.css';
import HeaderStateLess from './Components/HeaderStateLess';
import HeaderStateFull from './Components/HeaderStateFull';
import BaiTapLayout from './Components/BaiTapLayout/BaiTapLayout';
import DataBinding from './DataBinding/DataBinding';
import BaiTapthucHanhLayout from './Components/BaiTapthucHanhLayout/BaiTapthucHanhLayout';
import HandleEvent from './Components/BaiTapLayout/HandleEvent/HandleEvent';
import StateDemo from './Components/StateDemo/StateDemo';
import BTChonXe from './Components/StateDemo/BTChonXe';
import StyleDemo from './Components/StyleDemo/StyleDemo';
import RenderWithMap from './Components/RenderWithMap/RenderWithMap';
import BTQuanLyPhim from './Components/RenderWithMap/BTQuanLyPhim';
import DemoProps from './PropsDemo/DemoProps';
import BTDanhSachSanPham from './PropsDemo/BTDanhSachSanPham/BTDanhSachSanPham';
import DanhSachSanPhamRedux from './ReduxDemo/BTGioHangRedux/DanhSachSanPhamRedux';
import BTGameXucXac from './ReduxDemo/BTGameXucXac/BTGameXucXac';

function App() {
  return (
    <div className="App">
     {/* <BaiTapLayout /> */}
     {/* <DataBinding /> */}
     {/* <BaiTapthucHanhLayout /> */}
     {/* <HandleEvent /> */}
     {/* <StateDemo/> */}
     {/* <BTChonXe/> */}
     {/* <StyleDemo/> */}
      {/* <RenderWithMap/> */}
      {/* <BTQuanLyPhim /> */}
      {/* <DemoProps /> */}
      {/* <BTDanhSachSanPham/> */}
      {/* <DanhSachSanPhamRedux/> */}
      <BTGameXucXac/>
    </div>
  );
}

export default App;
