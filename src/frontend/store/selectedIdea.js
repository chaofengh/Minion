//selectedIdea.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIdeasById = createAsyncThunk('selectedIdeas/fetchIdeaById', async (ideaId)=>{
    const response = await fetch (`http://localhost:4001/api/ideas/${ideaId}`)
    const idea = await response.json()
    return idea
})

const selectedIdeaSlice = createSlice({
    name:'selectedIdea',
    initialState:{
        idea:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder
        .addCase(fetchIdeasById.pending, (state)=>{
            state.loading = true;
            state.error = null
        })
        .addCase(fetchIdeasById.fulfilled, (state,action)=>{
            state.loading =false;
            state.idea = action.payload;
        })
        .addCase(fetchIdeasById.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message
        })
    }
})

export const selectSelectedIdea = state =>state.selectedIdea.idea;
export const selectLoading = state=> state.selectedIdea.loading;
export const selectError = state=> state.selectedIdea.error;

export default selectedIdeaSlice.reducer