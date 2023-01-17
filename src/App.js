import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Checkout from "./components/Checkout";
import Main from "./components/Main";
import Shop from "./components/Shop";
import RootLayout from "./Routes/RootLayout";
// shoes import
import shoe1 from "./assets/shoes/shoe1.png";
import shoe2 from "./assets/shoes/shoe2.png";
import shoe3 from "./assets/shoes/shoe3.png";
import shoe4 from "./assets/shoes/shoe4.png";
import shoe5 from "./assets/shoes/shoe5.png";
import shoe6 from "./assets/shoes/shoe6.png";
import ShopItem from "./components/ShopItem";
import uuid from "react-uuid";

const sneakersArray = [
  {
    src: shoe1,
    name: "Nike Kyrie 5 Squidward",
    price: 300,
    id: uuid(),
  },
  { src: shoe2, name: "Nike Lebron 18", price: 200, id: uuid() },
  { src: shoe3, name: "Nike KD 14", price: 150, id: uuid() },
  { src: shoe4, name: "Nike Pg 2.5", price: 160, id: uuid() },
  {
    src: shoe5,
    name: "Nike Zoom Freak 3",
    price: 150,
    id: uuid(),
  },
  { src: shoe6, name: "Nike Kyrie 8 ", price: 70, id: uuid() },
];

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main sneakersArray={sneakersArray} />} />
        <Route path="/checkout" element={<Checkout />} />

        <Route
          path="/shop"
          element={<Shop sneakersArray={sneakersArray} />}
        ></Route>
        <Route
          path=":id"
          element={<ShopItem sneakersArray={sneakersArray} />}
        />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
      <footer>
        <div className="icons-container">
          <p>Follow our Socials</p>
          <button>
            <img
              src="./icons/facebook.svg"
              alt="facebook"
              className="social-icons"
            />
          </button>

          <button>
            <img
              src="./icons/insta.svg"
              alt="facebook"
              className="social-icons"
            />
          </button>
          <button>
            <img
              src="./icons/twitter.svg"
              alt="facebook"
              className="social-icons"
            />
          </button>
        </div>
        <p style={{ margin: "20px 0" }}>
          Copyright 2023@Sneaka Sneaker. All rights not reserved
        </p>
      </footer>
    </div>
  );
}

export default App;
