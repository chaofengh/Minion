import React,{useState} from "react";
import { useDispatch } from "react-redux";
import { addWork } from "../store/worksSlice";

const WorkForm =({minionId})=>{
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        title:'',
        description:'',
        hours:'',
        minionId:minionId
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addWork(formData));
    }

    return(
        <div>
            <h3>New Work</h3>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type='text' name='title' valie ={formData.title} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <input type='text' name = 'description' valie ={formData.description} onChange = {handleChange} />
                </label>
                <label>
                    Hours:
                    <input type='number' name ='hours' valie ={formData.hours} onChange= {handleChange} />
                </label>
                <button type ='submit'>Save</button>
            </form>
        </div>
    )
}

export default WorkForm;