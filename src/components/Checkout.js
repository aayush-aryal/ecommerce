import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, removeFromCart, setCart }) {
  const navigate = useNavigate();
  function handleCheckOut() {
    setCart([]);
    navigate("/");
  }
  return (
    <div className="checkout-container">
      {!cart.length ? (
        <h2>Empty {`:(`}</h2>
      ) : (
        <>
          <div className="total">
            <h2>Total:${cart.reduce((prev, item) => item.price + prev, 0)}</h2>
            <button onClick={handleCheckOut}>CheckOut</button>
          </div>
          <div className="cart-container">
            {cart.map((item) => (
              <div className="shop-item">
                <img src={item.src} alt={item.src} />
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <button onClick={() => removeFromCart(item)}>
                  Remove from Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
