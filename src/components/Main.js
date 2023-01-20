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
            <div className="single-shoe" key={shoe.id}>
              <Link to={`/shop/${shoe.id}`}>
                <img
                  src={shoe.src}
                  key={Math.random()}
                  className="shoe"
                  alt={shoe.name}
                />
              </Link>
              <p>{shoe.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="cover-athlete">
        <div className="cover-promoinfo">
          <h2>Gear Up This Season</h2>
          <p>
            Look like a pro, play like a pro <br /> Rep your favourite player's
            kicks
          </p>

          <button>Shop our player's collection bundle {">"} </button>
        </div>
        <img src={ant} className="anthony-edwards" alt="" />
      </div>
    </div>
  );
}
