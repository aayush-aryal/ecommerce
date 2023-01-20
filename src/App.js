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
import SneakerLayout from "./Routes/SneakerLayout";
import { useState } from "react";

const sneakersArray = [
  {
    src: shoe1,
    name: "Nike Kyrie 5 Squidward",
    price: 300,
    id: uuid(),
    description:
      "Squidward Tentacles is a full-time lover of the finer things in life and a part-time cashier at the Krusty Krab who can't stand his neighbours, SpongeBob SquarePants and Patrick Star. Fortunately, they remain blissfully unaware of Squidward's bitterness. In collaboration with Nickelodeon, the Kyrie 5 'Squidward' arrives in the iconic octopus' turquoise tones. *Clarinet skills not included.",
  },
  {
    src: shoe2,
    name: "Nike Lebron 18",
    price: 200,
    id: uuid(),
    description:
      "The shoe features many of the same details as the LeBron 17 including the BattleKnit 2.0 upper for a durable, sock feel. The giant Max Air unit in the heel also returns for shock absorption. The biggest difference is the new addition of full-length Zoom Air, Nike’s quick and bouncy cushioning system.",
  },
  {
    src: shoe3,
    name: "Nike KD 14",
    price: 150,
    id: uuid(),
    description:
      "Kevin Durant lurks on the wing, waiting for the right time to strike before slicing his way through defences.The KD14 EP is designed to help versatile, relentless players like KD feel fresh all game long.Multi-layer mesh and a midfoot strap help reduce the foot's movements inside the shoe.Full-length Zoom Air cushioning plus Cushlon foam give back energy for lasting performance.This EP version uses an extra-durable sole that's ideal for outdoor courts.",
  },
  {
    src: shoe4,
    name: "Nike Pg 2.5",
    price: 160,
    id: uuid(),
    description: `Paul George's game requires a shoe with a super-snug, supportive feel. To enhance support, Hardman added a stretch zone in the forefoot, which adapts to PG's foot as he moves. Then he added dynamic wings over the top of the stretch zone for even more support. "It creates a nice hug, similar to the PG 1," Hardman says, "but also eliminates the issues with narrow feet, when the strap was hanging over too far.`,
  },
  {
    src: shoe5,
    name: "Nike Zoom Freak 3",
    price: 150,
    id: uuid(),
    description:
      "The Zoom Freak 3 is built for that explosive stride, featuring Air Zoom cushioning for a propulsive feel, lockdown support and ridiculous traction helping you get first to the rim one Giannis-step at a time.",
  },
  {
    src: shoe6,
    name: "Nike Kyrie 8 ",
    price: 70,
    id: uuid(),
    description:
      "The Nike Kyrie Infinity is Kyrie Irving‘s 2021-22 signature shoe, but we’re not entirely sure what the brand would call them as some retailers instead listed them as the Nike Kyrie 8. Regardless of what these are called, though, we are excited to get them tested on the court. A lot of elements from the last two models as well as more recent Nike basketball releases have been included to make this shoe a certified bad boy performer.",
  },
];

function App() {
  // items in cart
  const [cart, setCart] = useState([]);
  function addtoCart(sneaker) {
    setCart((prev) =>
      prev.includes(sneaker) ? prev : [...prev, { ...sneaker, quantity: 1 }]
    );
  }

  function removeFromCart(sneaker) {
    setCart((prev) => prev.filter((item) => item !== sneaker));
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout cart={cart} />}>
        <Route index element={<Main sneakersArray={sneakersArray} />} />
        <Route
          path="/checkout"
          element={
            <Checkout
              cart={cart}
              setCart={setCart}
              removeFromCart={(sneaker) => removeFromCart(sneaker)}
            />
          }
        />
        <Route path="shop" element={<SneakerLayout />}>
          <Route index element={<Shop sneakersArray={sneakersArray} />} />
          <Route
            path=":id"
            element={
              <ShopItem
                sneakersArray={sneakersArray}
                cart={cart}
                addtoCart={(sneaker) => addtoCart(sneaker)}
                removeFromCart={(sneaker) => removeFromCart(sneaker)}
              />
            }
          />
        </Route>
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
