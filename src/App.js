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
import shoe1 from "./assets/shoes/shoe1.jpg";
import shoe2 from "./assets/shoes/shoe2.jpg";
import shoe3 from "./assets/shoes/shoe3.jpg";
import shoe4 from "./assets/shoes/shoe4.jpg";
import shoe5 from "./assets/shoes/shoe5.jpg";
import shoe6 from "./assets/shoes/shoe6.jpg";
const sneakersArray = [
  {
    src: shoe1,
    name: "Nike Toddler Kyrie 5",
  },
  { src: shoe2, name: "Nike Lebron 18" },
  { src: shoe3, name: "Nike KD 14 Psychedelic 2021" },
  { src: shoe4, name: "Under Armour Curry 8" },
  {
    src: shoe5,
    name: "Nike Zoom Freak 2 Midnight Navy",
    price: 150,
  },
  { src: shoe6, name: "Nike Kobe Venomenon 4", price: 1299 },
];

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Main sneakersArray={sneakersArray} />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    )
  );
  return (
    <div className="App">
      <RouterProvider router={router} />
      <footer>
        <p>Copyright 2023@Sneaka Sneaker. All rights not reserved</p>
      </footer>
    </div>
  );
}

export default App;
