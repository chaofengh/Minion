import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { deleteWork,updateWork } from "../store/worksSlice";

const WorkItem = ({work})=>{
    const dispatch = useDispatch();
    const[isEditing,setIsEditing] = useState(false);
    const [formData,setFormatData] = useState({...work})
    
    const handleChange = (e)=>{
        setFormatData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(updateWork(formData))
        setIsEditing(false)
    }

    const handleDelete =()=>{
        dispatch(deleteWork(formData.id))
    }

    return(
        <div>
            {isEditing?(
                <form onSubmit={handleSubmit}>
                    <input type='text' name='title' value={formData.title} onChange={handleChange} />
                    <input type='text' name='description' value={formData.description} onChange ={handleChange} />
                    <input type='number' name='hours' value ={formData.hours} onChange={handleChange} />
                    <button type='submit'>Save</button>
                </form>
            ):(
                <div>
                    <button onClick={handleDelete}>Delete</button>
                    <h4>{work.title}</h4>
                    <p>{work.description}</p>
                    <p>{work.hours}</p>
                    <button onClick={()=>setIsEditing(true)}>Edit</button>
                </div>
            )}
        </div>
    )
}

export default WorkItem;