import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Utensils, ShoppingCart, Info } from "lucide-react";
import { createPortal } from "react-dom";
import About from "./components/About";
import YourCart from "./components/YourCart";
import Order from "./components/Order";
import { addOne, removeOne, removeAll } from "./features/itemsCart";

function App() {
  const dispatch = useDispatch();
  const cartLength = useSelector((state) => state.itemsCart.cart.length);
 

  const [showCard, setShowCard] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showPortal, setShowPortal] = useState(false);

  function foo() {
    setShowCard(!showCard);
  }

  function CartOrder() {
    setShowCart(!showCart);
  }

  function closePortal() {
    setShowPortal(!showPortal);
  }

  return (
    <main className="w-full h-screen md:h-screen xl:flex-row bg-gradient-to-r from-red-400 to-red-900 flex flex-col items-center justify-center">
      <div className="border-white/80 bg-gradient-to-r from-zinc-800 to-zinc-900 w-[300px] sm:w-96 h-auto rounded-xl p-4 border-2 drop-shadow-2xl mb-5 xl:mr-5 ">
        <div className="text-center">
          <h1 className="font-mono font-extrabold text-white uppercase text-xl xl:mr-5">
            Izakaya Maneki ⛩️
          </h1>
        </div>
        <div className="py-5">
          <img
            src="https://uploads-ssl.webflow.com/5f66415376b89450919b99a3/5fed85f401923a9592f3c0cb_SUSHI_SHUNEI_%C2%A911h45_BD-13.jpg"
            alt="Sushi"
            className="w-full h-auto"
          />
        </div>
        <div className="flex justify-between">
          <button
            onClick={() => closePortal()}
            className="bg-red-500  hover:bg-red-600 hover:animate-none p-2 rounded-lg drop-shadow-2xl flex flex-row animate-pulse"
          >
            <span className="text-white pr-2 font-medium uppercase font-mono">
              Order
            </span>
            <Utensils color="#ededed" className="w-5" />
          </button>
          <button
            onClick={() => foo()}
            className="bg-red-500  hover:bg-red-600 p-2 rounded-lg drop-shadow-2xl flex flex-row"
          >
            <span className="text-white pr-2 font-medium uppercase font-mono">
              About
            </span>
            <Info color="#ededed" className="w-5" />
          </button>
          <button
            onClick={() => CartOrder()}
            className="bg-red-500  hover:bg-red-600 p-2 rounded-lg drop-shadow-2xl flex flex-row"
          >
            <span className="text-white pr-2 font-medium uppercase font-mono">
              Cart
            </span>
            <ShoppingCart color="#ededed" className="w-5" />
          </button>
        </div>
        {showCard && <About />}
      </div>
      {showCart && (
        <div className="border-white/80 bg-gradient-to-r from-zinc-800 to-zinc-900 w-[300px] sm:w-96  h-auto rounded-xl p-4 border-2 drop-shadow-2xl">
          <YourCart count={cartLength}  />
        </div>
      )}
      {showPortal &&
        createPortal(
          <Order close={() => closePortal()} count={cartLength} />,
          document.body
        )}
    </main>
  );
}

export default App;
