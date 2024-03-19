import "./Bg.css";
import close from "./images_bg_remove/close.png";
function Bg() {
  return (
    <div>
      <div className="bg-cont">
        <div className="header_title">העלאת תמונה כדי להסתיר את הרקע</div>
        <img className="close_top" src={close} alt=""></img>
        <div className="upload_btn">העלאת תמונה</div>
        <div className="content_div"></div>
      </div>
    </div>
  );
}

export default Bg;
