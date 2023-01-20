import { Link } from "react-router-dom";

export default function Shop(props) {
  return (
    <div className="shop">
      <div className="shop-container">
        {props.sneakersArray.map((sneaker) => {
          return (
            <div className="shop-item" key={sneaker.id}>
              <img src={sneaker.src} alt="sneaker.name" />
              <h2>{sneaker.name}</h2>
              <p>${sneaker.price}</p>
              <Link to={`${sneaker.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
