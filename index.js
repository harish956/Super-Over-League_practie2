const element = (
  //   Write your code here.
  <div className="bg-container">
    <h1 className="head">Super Over League</h1>
    <div className="image-card">
      <img
        src="https://assets.ccbp.in/frontend/react-js/rcb-img.png"
        alt="img1"
        className="img"
      />
      <img
        src="https://assets.ccbp.in/frontend/react-js/csk-img.png"
        alt="img2"
        className="img"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
