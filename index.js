const element = (
  <div className="card-bg">
    <h1 className="heading">Congratulations</h1>
    <div className="profile-card">
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
      />
      <h1 class="profile-heading">Kiran V</h1>
      <p className="profile-paragraph">
        Vishnu institude of computer education and Technology Bhimavaram
      </p>
      <img
        className="image"
        src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
      />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
