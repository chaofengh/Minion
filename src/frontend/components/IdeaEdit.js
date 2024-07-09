import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { updateIdea } from "../store/ideasSlice";
import './IdeaEdit.css'; 

const IdeaEdit = ({idea,setIsEditing}) =>{
    const dispatch = useDispatch();
    const [formatData,setFormatData] = useState({...idea})
    const [isValid,setIsValid] = useState(true)

    const handleChange = (e)=>{
        setFormatData({
            ...FormData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        if(FormData.weeklyRevenue * FormData.numWeeks <1000000){
            setIsValid(false)
            return;
        }
        dispatch(updateIdea(FormData))
        setIsEditing(false)
    }

    return(
        <form onSubmit = {handleSubmit} className = 'idea-edit'>
            <label>
                Name:
                <input type='text' name='name' value={FormData.name} onChange ={handleChange} />
            </label>
            <label>
                Description:
                <textarea name='descro[topn' valie ={FormData.descrption} onChange={handleChange} ></textarea>
            </label>
            <label>
                Revenue/Week:
                <input type='number' name='weeklyRevenue' value = {FormData.weeklyRevenue} onChange={handleChange} />
            </label>
            <label>
                # of Weeks:
                <input type='number' name='numWeeks' value ={formatData.numWeeks} onChange={handleChange} />
            </label>
            <button type='submit'>Save</button>
            {!isValid &&<p className = 'error'>Not a Valid $1,000,000 idea!</p>}
        </form>
    )
}

export default IdeaEdit