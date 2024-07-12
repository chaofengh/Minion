import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

export const fetchWork = createAsyncThunk('work/fetchWork', async (minionId) => {
    const response = await fetch(`http://localhost:4001/api/minions/${minionId}/works`);
    return await response.json();
});

export const addWork = createAsyncThunk('work/addWork', async(work)=>{
    const response = await fetch(`http://localhost:4001/api/minions/${work.minionId}/works`,{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(work)
    })

    const createdWork = await response.json()
    return createdWork
})

export const updateWork = createAsyncThunk('work/updateWork', async (work)=>{
    const response = await fetch(`http://localhost:4001/api/minions/${work.minionId}/works/${work.id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(work)
    })

    return await response.json()
})

export const deleteWork = createAsyncThunk('work/deleteWork',async (work)=>{
    await fetch(`http://localhost:4001/api/minions/${work.minionId}/works/${work.id}`,{method:'DELETE'});
    return work.id
})

const worksSlice= createSlice({
    name:'work',
    initialState:{
        work:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchWork.pending,(state)=>{
                state.loading = true
            })
            .addCase(fetchWork.fulfilled,(state,action)=>{
                state.loading = false;
                state.work = action.payload
            })
            .addCase(fetchWork.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(addWork.pending,(state)=>{
                state.loading = true
            })
            .addCase(addWork.fulfilled,(state,action)=>{
                state.loading = false;
                state.work.push(action.payload)
            })
            .addCase(addWork.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(updateWork.pending,(state)=>{
                state.loading = true
            })
            .addCase(updateWork.fulfilled,(state,action)=>{
                state.loading = false;
                const index = state.work.findIndex(work => work.id ===action.payload.id)
                if (index !== -1){
                    state.work[index] = action.payload
                }
            })
            .addCase(updateWork.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(deleteWork.pending,(state)=>{
                state.loading = true
            })
            .addCase(deleteWork.fulfilled,(state,action)=>{
                state.loading = false;
                state.work = state.work.filter(work => work.id !== action.payload)
            })
            .addCase(deleteWork.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
    }
})

export const selectWork = (state) => state.work.work
export const selectLoading = state => state.work.loading;
export const selectError = state=>state.work.error;

export default worksSlice.reducer;