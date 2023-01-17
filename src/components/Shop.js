export default function Shop(props) {
  return (
    <div className="shop">
      <div className="shop-container">
        {props.sneakersArray.map((sneaker) => {
          return (
            <div className="shop-item">
              <img src={sneaker.src} alt="sneaker.name" />
              <h2>{sneaker.name}</h2>
              <p>${sneaker.price}</p>
              <button>Add to Cart</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
