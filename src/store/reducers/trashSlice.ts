import { createSlice } from "@reduxjs/toolkit";
import { TrashType } from "../../components/main/trashItem/TrashItem";
import { calcTotal, calcCount } from "../../utils/calcTotal";
import { getCartLs } from "../../utils/getCartLs";

const {items, totalPrice, totalCount} = getCartLs()
const initialState:TrashSliceState = {
   items,
   totalPrice: totalPrice,
   totalItems: totalCount
}

// export type ItemsTrash = {
//     id: string;
//     count:number;
//     price:number;
//     img?: string;
// }

interface TrashSliceState  {
    items: TrashType[];
    totalPrice: number;
    totalItems: number;
}

 

const trashSlice = createSlice({
    name: 'trash',
    initialState,
    reducers:{
       addItem(state, action){
        const exsist = state.items.find(obj => obj.id === action.payload.id)
        if(exsist){
            exsist.count++
        }else{
            state.items.push({
                ...action.payload,
                    count: 1})
        }
        
        
        state.totalPrice = calcTotal(state.items)

        state.totalItems = state.items.reduce((sum, obj) => {
            return obj.count + sum 
        },0)

       },
       removeOneItem(state, action){
        state.items = state.items.filter(i =>{ 
          return  i.id !== action.payload
        })
        state.totalPrice = calcTotal(state.items)
        state.totalItems = calcCount(state.items)
      
       },
       removeItems(state){
        state.items = []
        state.totalPrice = 0
        state.totalItems = 0
       },

       itemPlus(state, action){
        const exsist = state.items.find(obj => obj.id === action.payload)
        if(exsist){
            exsist.count++
        }
        state.totalPrice = calcTotal(state.items)
        state.totalItems = calcCount(state.items)
       },

       itemMinus(state, action){
        const exsist = state.items.find(obj => obj.id === action.payload)
        if(exsist){
            if(exsist.count > 0){
                exsist.count--
            }else{
                state.items = state.items.filter(i => i.id !== action.payload)
            }

            state.totalPrice = calcTotal(state.items)
            state.totalItems = calcCount(state.items)   
        }
       }
    }
})

export default trashSlice.reducer

export const {addItem, itemPlus, itemMinus, removeItems, removeOneItem} = trashSlice.actions