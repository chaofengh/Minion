import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { addMinion} from '../store/minionsSlice';


const MinionForm = ()=>{
    const dispatch = useDispatch();
    const [formData,setFormData] = useState({
        name:'',
        title:'',
        salary:'',
        weaknesses:''
    })

    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(addMinion(formData))
    }
    return(
        <div>
            <h2>New Minion</h2>
            <form onSubmit = {handleSubmit}>
                <label>
                    Name:
                    <input type ='text' name ='name' value = {formData.name} onChange={handleChange} />
                </label>
                <label>
                    Title: 
                    <input type='text' name ='title' value = {formData.title} onChange= {handleChange} />
                </label>
                <label>
                    Salary:
                    <input type ='number' name ='Salary' value ={formData.salary} onChange= {handleChange} />
                </label>
                <label>
                    Weaknesses:
                    <textarea name = 'weaknesses' value = {formData.weaknesses} onChange= {handleChange} ></textarea>
                </label>
                <button type ='submit'>Save</button>
            </form>
        </div>
    )
}

export default MinionForm;