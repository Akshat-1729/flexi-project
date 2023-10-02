import "../searchItem/searchItem.css";

const FlightItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://cf.bstatic.com/xdata/images/hotel/square600/261707778.webp?k=fa6b6128468ec15e81f7d076b6f2473fa3a80c255582f155cae35f9edbffdd78&o=&s=1"
        alt=""
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Qatar Airlines</h1>
        <span className="siDistance">Book Hasslefree Tickets</span>
        <span className="siTaxiOp">Starting from: $60</span>
        <span className="siSubtitle">
        Manchester To New York
        </span>
        <span className="siFeatures">
        Book with Indigo to have a good experience 
        </span>
        <span className="siCancelOp"> Cancellation Available</span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$112</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default FlightItem;