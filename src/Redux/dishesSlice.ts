import { IDish } from './../interfaces/IDish';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { filterItems } from '../Components/FindBlock/FindBlock';

interface disherState {
    dishesArray: IDish[],
    filteredArray: IDish[]
}

// Define the initial state using that type
const initialState: disherState = {
    dishesArray: [],
    filteredArray: []
}

export const dishesSlice = createSlice({
    name: 'fishes',
    initialState,
    reducers: {
        getDishes: (state, action: PayloadAction<IDish[]>) => {
            state.dishesArray = action.payload
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
        },
        filterArray: (state, action: PayloadAction<{ find?: string, type?: string }>) => {
            state.filteredArray = []
            if (action.payload.type) {
                if (action.payload.type == "popular") {

                    state.filteredArray = state.dishesArray.filter(elem => elem.popular)
                    return
                }
                if (action.payload.type == "favourite") {
                    const result = localStorage.getItem('favourites')

                    if (result) {
                        state.filteredArray = JSON.parse(result)
                    }
                    return
                } else {
                    state.filteredArray = state.dishesArray.filter((elem) => elem.type == action.payload.type)
                    return
                }
            } else {
                state.filteredArray = filterItems(state.dishesArray, action.payload.find)
                return
            }
        },
        incrementByAmount: (state, action) => {
        },
    },
})

// Action creators are generated for each case reducer function
export const { getDishes, filterArray, incrementByAmount } = dishesSlice.actions

export default dishesSlice.reducer
