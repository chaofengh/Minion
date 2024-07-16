import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchIdeas = createAsyncThunk('ideas/fetchIdeas', async ()=>{
    const response = await fetch('http://localhost:4001/api/ideas');
    const ideas = await response.json()
    return ideas
})

export const updateIdea = createAsyncThunk('ideas/updateIdea', async(idea)=>{
    const response = await fetch(`http://localhost:4001/api/ideas/${idea.id}`,{
        method:'PUT',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(idea)
    })

    return await response.json()
})

export const deleteIdea= createAsyncThunk('ideas/deleteIdea', async(idea)=>{
    await fetch(`http://localhost:4001/api/ideas/${idea.id}`,{method:'DELETE'})
    return idea.id
})

export const addIdea = createAsyncThunk('ideas/addIdea', async (idea)=>{
    const response = await fetch(`http://localhost:4001/api/ideas/`,{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify(idea)
    })

    return await response.json()
})

const ideasSlice = createSlice({
    name:'ideas',
    initialState:{
        ideas:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchIdeas.pending,(state)=>{
                state.loading = true;
                state.error = null
            })
            .addCase(fetchIdeas.fulfilled,(state,action)=>{
                state.loading = false;
                state.ideas = action.payload;
            })
            .addCase(fetchIdeas.rejected, (state,action)=>{
                state.loading = false;
                state.error = action.error.message;
            })
            .addCase(updateIdea.pending,(state)=>{
                state.pending = true;
            })
            .addCase(updateIdea.fulfilled,(state,action)=>{
                state.pending = false;
                const index = state.ideas.findIndex(idea => idea.id === action.payload.id)
                if(index !== -1){
                    state.ideas[index] = action.payload
                }
            })
            .addCase(updateIdea.rejected,(state,action)=>{
                state.pending = false;
                state.error =action.error.message
            })
            .addCase(addIdea.pending,(state)=>{
                state.pending = true
            })
            .addCase(addIdea.fulfilled,(state,action)=>{
                state.pending=false;
                state.ideas.push(action.payload)
            })
            .addCase(addIdea.rejected,(state,action)=>{
                state.pending = false;
                state.error = action.error.message;
            })
            .addCase(deleteIdea.pending,(state)=>{
                state.pending = true
            })
            .addCase(deleteIdea.fulfilled,(state,action)=>{
                state.loading = false;
                state.ideas = state.ideas.filter(idea=> idea.id !== action.payload)
            })
            .addCase(deleteIdea.rejected,(state,action)=>{
                state.loading=false;
                state.error=action.error.message
            })
    }
})

export const selectIdeas = (state) => state.ideas.ideas;
export const selectLoading = (state) => state.ideas.loading;
export const selectError = (state)=> state.ideas.error;

export default ideasSlice.reducer;