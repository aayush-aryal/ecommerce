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
    if (sneaker) {
      addtoCart(sneaker);
    }
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 700);
  }
  function handleRemove() {
    removeFromCart(sneaker);
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
            {!cart.includes(sneaker) && (
              <button onClick={handleClick}>Add to Cart</button>
            )}
            {cart.includes(sneaker) && (
              <button onClick={handleRemove}>Remove from Cart</button>
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
