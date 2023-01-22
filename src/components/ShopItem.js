import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ShopItem({
  removeFromCart,
  sneakersArray,
  cart,
  addtoCart,
}) {
  const { id } = useParams();
  const [added, setAdded] = useState(false);
  const [sneaker, setSneaker] = useState(null);
  useEffect(() => {
    const sneaker = sneakersArray.find((sneaker) => sneaker.id === id);
    setSneaker(sneaker);
  }, [id, sneakersArray]);

  function handleClick() {
    addtoCart(sneaker);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 700);
  }

  return (
    <div className="shopitem-container">
      {sneaker && (
        <>
          <img src={sneaker.src} className="shopitem-sneaker" />
          <div className="shopitem-info">
            <h2>{sneaker.name}</h2>
            <p>${sneaker.price}</p>
            <p>{sneaker.description}</p>
            {!cart.filter((item) => item.id === sneaker.id).length ? (
              <button onClick={handleClick}>Add to Cart</button>
            ) : (
              <button
                onClick={() =>
                  removeFromCart(
                    cart.filter((item) => item.id === sneaker.id)[0]
                  )
                }
              >
                Remove From Cart
              </button>
            )}
          </div>
          {added && (
            <div className="added">
              <p>The item has sucessfully added to cart</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}
