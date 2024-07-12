import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMinionById = createAsyncThunk('selectedMinion/fetchMinionById', async (minionId)=>{
    const response = await fetch(`http://localhost:4001/api/minions/${minionId}`);
    const minion = await response.json()
    return minion
})

const selectedMinionsSlice = createSlice({
    name:'selectedMinion',
    initialState:{
        minion:null,
        loading: false,
        erro : null
    },
    reducer:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchMinionById.pending,(state)=>{
                state.loading = true;
                state.error = null
            })
            .addCase(fetchMinionById.fulfilled,(state,action)=>{
                state.loading = false;
                state.minion = action.payload;
            })
            .addCase(fetchMinionById.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
    })
    }
})

export const selectSelectedMinion = state => state.selectedMinion.minion;
export const selectloading = state => state.selectedMinion.loading;
export const selectError = state => state.selectedMinion.error;

export default selectedMinionsSlice.reducer;