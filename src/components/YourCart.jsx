import {CreditCard,Trash2} from "lucide-react";
import { removeAll} from "../features/itemsCart";
import { useDispatch,useSelector } from "react-redux";



export default function YourCart({count, price}) {
  const dispatch = useDispatch()
  const items = useSelector((state) => state.items.list);

  const totalPrice = useSelector((state) => state.itemsCart.totalPrice);

  
  return (
    <div className="flex flex-col justify-between">
      <div>
        <h2 className="font-mono text-red-400 pb-2 text-xl font-bold">Your Order</h2>
      </div>
      <div className="flex flex-row flex-wrap item-center justify-between">
        <p className="font-mono text-white">Articles ({count})</p>
        <p className="font-mono text-white mx-auto">Totals ({totalPrice}$)</p>
      </div>
      <div className="mt-3 flex flex-row  justify-end ">
        <button 
        onClick={() => dispatch(removeAll(items))}
        className='border-red-500 border-2 hover:bg-red-400/20 p-2 rounded-lg drop-shadow-2xl flex flex-row item-center  text-white mr-2'> 
          <span className="pr-2 font-semibold">Delete </span>
          <Trash2 color="#ededed" className="w-4" /></button>
        <a  href="https://www.youtube.com/watch?v=GmPZUCd89p8" className='bg-red-500 hover:bg-red-600 p-2 rounded-lg drop-shadow-2xl flex flex-row item-center   text-white '>
          <span className="pr-2 font-semibold">Go to pay </span>
          <CreditCard color="#ededed" className="w-4" />
        </a>
      </div>
    </div>
  )
}