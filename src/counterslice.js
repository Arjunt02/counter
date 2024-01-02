import { createSlice } from "@reduxjs/toolkit";


const initialState={value:0}
// state name --- value
// initial value-----0

export const counterSlice=createSlice({
    name:'counter',
    initialState,
    reducers:{

        // actions
        increment:(state)=>{
            state.value+=1
        },
        decrement:(state)=>{
            state.value-=1
        },
        reset:(state)=>{
            state.value=0
        }
    }
})


export const{increment,decrement,reset}=counterSlice.actions

export default counterSlice.reducer



// A function that accepts an initial state, 
// an object full of reducer functions,
//  and a "slice name",
//  and automatically generates action creators and action types that correspond to the reducers and state.

// The reducer argument is passed to createReducer().