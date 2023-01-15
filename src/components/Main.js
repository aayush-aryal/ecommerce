import { Link } from "react-router-dom";
import ant from "../assets/anthony-edwards.jpg";
export default function Main(props) {
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
      <div className="featured">
        <h2>Featured</h2>
        <p>Star Player Edition</p>
        <div className="shoe-container">
          {props.sneakersArray.map((shoe) => (
            <div className="single-shoe">
              <Link to="/shop">
                <img src={shoe.src} key={Math.random()} className="shoe" />
              </Link>
              <p>{shoe.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cover-athlete">
        <div className="cover-promoinfo">
          <h2>Gear Up This Season</h2>
          <p>Look like a pro, play like a pro</p>
          <p>Rep your favourite player's kick</p>
          <button>Shop our player's collection bundle {">"} </button>
        </div>
        <img src={ant} className="anthony-edwards" alt="" />
      </div>
    </div>
  );
}
