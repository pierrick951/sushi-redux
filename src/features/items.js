import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from 'nanoid';


const initialState =  {
    list: [
        {
            name:"Sushi 🍣",
            price:2,
            id: nanoid()
        },
        {
            name:"Onigiri 🍙",
            price:2,
            id: nanoid()
        },
        {
            name:"Ramen 🍜",
            price:10,
            id: nanoid()
        },
        {
            name:"Dango 🍡",
            price:10,
            id: nanoid()
        },
        {
            name:"Beer 🍺",
            price:5,
            id: nanoid()
        },
        {
            name:"Sake 🍶",
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