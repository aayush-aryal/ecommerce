import { useNavigate } from "react-router-dom";

export default function Checkout({ cart, removeFromCart, setCart }) {
  const navigate = useNavigate();
  function handleCheckOut() {
    setCart([]);
    navigate("/");
  }
  console.log(cart);
  function handleQuantity(e, item) {
    // check if user is trying to reduce quantity to 0
    if (item.quantity === 1 && e.target.textContent === "-") {
      removeFromCart(item);
      return;
    }
    if (e.target.textContent === "+") {
      setCart(
        cart.map((shoe) => {
          if (shoe === item) {
            return { ...shoe, quantity: shoe.quantity + 1 };
          } else {
            return shoe;
          }
        })
      );
    } else if (e.target.textContent === "-") {
      setCart(
        cart.map((shoe) => {
          if (shoe === item) {
            return { ...shoe, quantity: shoe.quantity - 1 };
          } else {
            return shoe;
          }
        })
      );
    }
  }
  return (
    <div className="checkout-container">
      {!cart.length ? (
        <h2>Empty {`:(`}</h2>
      ) : (
        <>
          <div className="total">
            <h2>
              Total:$
              {cart.reduce(
                (prev, item) => item.price * item.quantity + prev,
                0
              )}
            </h2>
            <button onClick={handleCheckOut}>CheckOut</button>
          </div>
          <div className="cart-container">
            {cart.map((item) => (
              <div className="shop-item" key={item.id}>
                <img src={item.src} alt={item.src} />
                <h2>{item.name}</h2>
                <p>${item.price}</p>
                <div className="quantity-button-container">
                  <p>Quantity:{item.quantity}</p>
                  <button onClick={(e) => handleQuantity(e, item)}>+</button>
                  <button onClick={(e) => handleQuantity(e, item)}>-</button>
                </div>

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
