import { Link } from "react-router-dom";
import Sneaker from "../assets/homepage-sneaker.avif";
import Sneaker2 from "../assets/homepage-personshoe.avif";
import Sneaker3 from "../assets/homepage-personshoe2.avif";
import ant from "../assets/anthony-edwards.jpg";
export default function Main() {
  return (
    <div className="main">
      <div className="parent-container">
        <div className="container">
          <div className="inner-div">
            <Link to="/shop">
              <button className="shop-button">Shop Now</button>
            </Link>
          </div>
        </div>
      </div>
      <h2>New Arrivals</h2>
      <div className="image-info-container">
        <div className="information">
          <p>Sports</p>
          <p>Casual</p>
          <p>Collection</p>
        </div>
        <div className="image-display">
          <div className="indiv-imgcontainer">
            <img src={Sneaker} alt="" className="display-images" />
            <h2>Random</h2>
            <p>Shop from our casual collection</p>
          </div>
          <div className="indiv-imgcontainer">
            <img src={Sneaker2} className="display-images" alt="" />
            <h2>Random</h2>
            <p>Shop from our exclusive sportswear collection</p>
          </div>
          <div className="indiv-imgcontainer">
            <img src={Sneaker3} className="display-images" alt="" />
            <h2>Random</h2>
            <p>Shop from our unique rep collection</p>
          </div>
        </div>
        <div className="cover-athlete">
          <div className="cover-promoinfo">
            <h2>Gear Up This Season</h2>
            <p>Look like a pro , play like a pro</p>
            <p>Rep your favourite player's kick</p>
            <button>Shop our player's collection bundle > </button>
          </div>
          <img src={ant} className="anthony-edwards" alt="" />
        </div>
      </div>
    </div>
  );
}
