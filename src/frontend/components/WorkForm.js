import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWork } from '../store/worksSlice';
import './WorkForm.css';

const WorkForm = ({ minionId, onCancel }) => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({ 
        title: '', 
        description: '', 
        hours: null, 
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
        onCancel();
    };

    return (
        <tr className="work-form">
            <td><input type="text" name="title" value={formData.title} onChange={handleChange} /></td>
            <td><input name="description" value={formData.description} onChange={handleChange} /></td>
            <td><input type="number" name="hours" value={formData.hours} onChange={handleChange} /></td>
            <td>
                <button type="submit" onClick={handleSubmit}>Submit</button>
                <button type='button' onClick={onCancel}>Cancel</button>
            </td>
        </tr>
    );
};

export default WorkForm;
