import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWork } from '../store/worksSlice';
import './WorkForm.css';

const WorkForm = ({ minionId }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ 
        title: '', 
        description: '', 
        hours: '', 
        minionId 
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addWork(formData));
    };

    return (
        <form className="work-form" onSubmit={handleSubmit}>
            <label>
                Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
            </label>
            <label>
                Description:
                <textarea name="description" value={formData.description} onChange={handleChange}></textarea>
            </label>
            <label>
                Hours:
                <input type="number" name="hours" value={formData.hours} onChange={handleChange} />
            </label>
            <button type="submit">Add Work</button>
        </form>
    );
};

export default WorkForm;
