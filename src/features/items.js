import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


const initialState =  {
    list: [
        {
            name:"sushi",
            price:2,
            id: nanoid()
        },
        {
            name:"onigiri",
            price:2,
            id: nanoid()
        },
        {
            name:"ramen",
            price:10,
            id: nanoid()
        },
        {
            name:"dango",
            price:10,
            id: nanoid()
        },
        {
            name:"beer",
            price:5,
            id: nanoid()
        },
        {
            name:"soda",
            price:3,
            id: nanoid()
        },
    ]
}


export const itemsSlice = createSlice({
    name:'items',
    initialState,
    reducers: {

    }
})

export default itemsSlice.reducer