import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchMeetings = createAsyncThunk('meetings/fetchMettings', async ()=>{
    const response = await fetch('http://localhost:4001/api/meetings');
    const meetings = response.json()
    return meetings
})

export const createMeeting = createAsyncThunk('meetings/createMeeting',async()=>{
    const response = await fetch(`http://localhost:4001/api/meetings`,{
        method:'POST'
    })

    return await response.json()
})

export const deleteAllMeetings = createAsyncThunk('meetings/deleteAllMeetings', async()=>{
    await fetch(`http://localhost:4001/api/meetings`,{method:'DELETE'})
    return []
})

const meetingsSlice = createSlice({
    name:'meetings',
    initialState:{
        meetings:[],
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers: (builder) =>{
        builder
            .addCase(fetchMeetings.pending,(state)=>{
                state.loading = true;
                state.error = null
            })
            .addCase(fetchMeetings.fulfilled,(state,action)=>{
                state.loading = false;
                state.meetings = action.payload
            })
            .addCase(fetchMeetings.rejected,(state,action)=>{
                state.loading = false;
                state.error = action.error.message
            })
            .addCase(createMeeting.pending,(state)=>{
                state.pending = true
            })
            .addCase(createMeeting.fulfilled,(state,action)=>{
                state.pending = false;
                state.meetings.push(action.payload)
            })
            .addCase(createMeeting.rejected,(state,action)=>{
                state.pending = false;
                state.error= action.error.message
            })
            .addCase(deleteAllMeetings.pending,(state)=>{
                state.pending = true;
            })
            .addCase(deleteAllMeetings.fulfilled,(state)=>{
                state.pending = false
                state.meetings= []
            })
            .addCase(deleteAllMeetings.rejected,(state,action)=>{
                state.pending =false;
                state.error= action.error.message
            })
    }
})

export const selectMeetings = state => state.meetings.meetings;
export const selectLoading  = state => state.meetings.loading;
export const selectError = state => state.meetings.error;

export default meetingsSlice.reducer