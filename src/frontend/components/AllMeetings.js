import React,{useEffect,useState} from "react";
import { useDispatch,useSelector } from "react-redux";
import Meeting from './Meeting'

import{fetchMeetings,createMeeting,deleteAllMeetings,selectMeetings,selectLoading,selectError} from '../store/meetingsSlice';
import './AllMeetings.css'

const AllMeeting = ()=>{
    const dispatch = useDispatch();
    const meetings = useSelector()
}