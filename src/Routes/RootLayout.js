import { Outlet, NavLink } from "react-router-dom";
export default function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <h1>Sneaka Sneaker</h1>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/checkout">Checkout</NavLink>
          <NavLink to="/">Home</NavLink>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
