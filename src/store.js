import { configureStore} from '@reduxjs/toolkit';
import items from './features/items';
import itemsCart from './features/itemsCart'


export const store = configureStore({
  reducer: {

   items,
   itemsCart,

  },
 
});
