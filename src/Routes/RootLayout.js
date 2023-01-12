import { Outlet, NavLink } from "react-router-dom";
import ShoppingCart from "../components/shopping-cart.svg";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Sneaka Sneaker</h1>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/checkout">
            <div className="cart-container">
              <div className="cart-items">2</div>
              <img src={ShoppingCart} className="shopping-cart" />
            </div>
          </NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}