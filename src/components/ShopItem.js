import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ShopItem({ sneakersArray }) {
  const { id } = useParams();
  const [sneaker, setSneaker] = useState(null);
  useEffect(() => {
    const sneaker = sneakersArray.find((sneaker) => sneaker.id === id);
    setSneaker(sneaker);
  }, [id, sneakersArray]);
  return (
    <div className="shop-item">
      {sneaker && (
        <>
          <img src={sneaker.src} alt={sneaker.name} />
          <h2>{sneaker.name}</h2>
          <p>${sneaker.price}</p>
        </>
      )}
    </div>
  );
}
