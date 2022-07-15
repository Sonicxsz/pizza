import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Itempizza } from "../../components/main/item/Item";

type ParamsType = Record<string, string>

export const fetchPizza = createAsyncThunk(
    'pizza/fetchAll',
    async (params: ParamsType) =>{
        const {sort, order, tag} = params

        const resp = await fetch(`https://62ad2086402135c7acbce32a.mockapi.io/items?tag=${tag}&sortBy=${sort}&order=${order}`)
              .then(resp => resp.json()) as Itempizza[]
        return await resp 
    }
)

const initialState:pizzaSliceState = {
    items: [],
    status: 'loading',
    item: {}
}

interface pizzaSliceState {
    items: Itempizza[];
    status: 'loading' | 'success' | 'error';
    item: Itempizza | {};
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,

    reducers: {
        addItems(state, action: PayloadAction<Itempizza[]>){
             state.items = action.payload
        }
    },
    extraReducers: (builder) =>{
        builder.addCase(fetchPizza.pending, (state) =>{
            state.status = 'loading'
        })
        builder.addCase(fetchPizza.fulfilled, (state, action: PayloadAction<Itempizza[]>) =>{
            state.items = action.payload
            state.status = 'success'
        })
        builder.addCase(fetchPizza.rejected, (state) =>{
            state.status = 'error'
            state.items = []
        })
     
    }
})


export default pizzaSlice.reducer

export const {addItems} = pizzaSlice.actions