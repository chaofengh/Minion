import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMinions = createAsyncThunk('minions/fetchMinions', async ()=>{
    const response = await fetch('http://localhost:4001/api/minions')
    const minions = await response.json()
    return minions
})

const minionsSlice = createSlice({
    name:'minions',
    initialState:{
        minions:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchMinions.pending,(state)=>{
                state.loading = true;
                state.error = null
            })
            .addCase(fetchMinions.fulfilled,(state,action)=>{
                state.loading = false;
                state.minions = action.payload
            })
            .addCase(fetchMinions.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
    }
})