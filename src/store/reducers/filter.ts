import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState:IFilterSliceState = {
    activeSort: {name:'популярности', sortType: 'rating'},
    activeFilter: {name: 'Все пиццы',tag:'ALL'},
    searchInput: ''
}



interface IFilterSliceState {
    activeSort:{name:string, sortType:string},
    activeFilter:{name:string, tag:string},
    searchInput?: string
}

 

const filter = createSlice({
    name: 'filter',
    initialState,
    reducers:{
        setActiveSort(state, action: PayloadAction<{name:string, sortType:string}>){
            state.activeSort = action.payload
        },
        setActiveFilter(state, action: PayloadAction<{name:string, tag:string}>){
            state.activeFilter = action.payload        
        },
        setSearchInp(state, action: PayloadAction<string>){
            state.searchInput = action.payload
        },
        setFilters(state, action:PayloadAction <IFilterSliceState>){
            state.activeSort = action.payload.activeSort;
            state.activeFilter = action.payload.activeFilter;
            
        }
    }
})

export default filter.reducer

export const {setActiveFilter, setActiveSort, setSearchInp, setFilters} = filter.actions