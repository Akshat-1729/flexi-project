import "./attraction.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import i1 from "../../images/i1.jpeg";
import i2 from "../../images/i2.webp";
import i3 from "../../images/i3.webp";
import i4 from "../../images/i4.jpeg";
import i5 from "../../images/i5.jpeg";
import i6 from "../../images/i6.jpeg";


const Attraction = () => {
  return (
    <div>
        <Navbar/>
        <Header type="list"/>
    <div className="outerBox">
    <div className="searchItem">
      <img
        src={i1}
        alt=""
        className="siImg"
      />
      </div>
      <div className="searchItem">
      <img
        src={i2}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem">
      <img
        src={i3}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem">
      <img
        src={i4}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem">
      <img
        src={i5}
        alt=""
        className="siImg"
      />
      </div><div className="searchItem">
      <img
        src={i6}
        alt=""
        className="siImg"
      />
      </div>

    </div>
  </div>
  );
};

export default Attraction;