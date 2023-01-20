import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout({ cart }) {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Sneaka Sneaker</h1>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/checkout">
            <div className="cart-container">
              <div className="cart-items">{cart.length}</div>
              <img
                src="./icons/shopping-cart.svg"
                className="shopping-cart"
                alt="shopping cart"
              />
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
