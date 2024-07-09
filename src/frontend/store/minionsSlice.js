import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMinions = createAsyncThunk('minions/fetchMinions', async ()=>{
    const response = await fetch('http://localhost:4001/api/minions')
    const minions = await response.json()
    return minions
})

export const deleteMinion = createAsyncThunk('minions/deleteMinion',async (minionId)=>{
    await fetch(`http://localhost:4001/api/minions/${minionId}`,{method:'DELETE'})
    return minionId
})

export const addMinion = createAsyncThunk(`minions/addMinion`, async (minion)=>{
    const response = await fetch(`http://localhost:4001/api/minions`,{
        method:'POST',
        headers:{ 'Content-Type': 'application/json' },
        body:JSON.stringify(minion)
    })

    return await response.json()
})

export const updateMinion = createAsyncThunk('minions/updateMinion', async (minion)=>{
    const response = await fetch(`http://localhost:4001/api/minions/${minion.id}`,{
        method:'PUT',
        headers:{'Content-Type': 'application/json'},
        body: JSON.stringify(minion)
    })

    return await response.json()
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
            .addCase(deleteMinion.pending,(state)=>{
                state.loading = true;
            })
            .addCase(deleteMinion.fulfilled, (state,action)=>{
                state.loading = false;
                state.minions = state.minions.filter(minion => minion.id !== action.payload)
            })
            .addCase(deleteMinion.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(addMinion.pending, (state)=>{
                state.loading = true;
            })
            .addCase(addMinion.fulfilled,(state,action)=>{
                state.loading = false;
                state.minions.push(action.payload)
            })
            .addCase(addMinion.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(updateMinion.pending, (state)=>{
                state.loading = true;
            })
            .addCase(updateMinion.fulfilled,(state,action)=>{
                state.loading = false;
                const index = state.minions.findIndex(minion => minion.id === action.payload.id)
                if(index !== -1){
                    state.minions[index] = action.payload
                }
            })
            .addCase(updateMinion.rejected, (state,action)=>{
                state.loading = false;
                state.error =action.error.message
            })
            
    }
})

export const selectMinions = state => state.minions.minions
export const selectLoading = state => state.minions.loading
export const selectError = state => state.minions.error

export default minionsSlice.reducer;