import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteWork, updateWork } from '../store/worksSlice';
import './WorkItem.css';

const WorkItem = ({ work }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(work);

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleDelete = () => {
        dispatch(deleteWork(work));
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setFormData(work);
    };

    const handleChange = (e) => {
        e.preventDefault();
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSaveClick = () => {
        dispatch(updateWork(formData));
        setIsEditing(false);
    };

    return (
        <tr className='work-item'>
            {isEditing ? (
                <>
                    <td><input type='text' name='title' value={formData.title} onChange={handleChange} /></td>
                    <td><input type='text' name='description' value={formData.description} onChange={handleChange} /></td>
                    <td><input type='number' name='hours' value={formData.hours} onChange={handleChange} /></td>
                    <td>
                        <button onClick={handleSaveClick}>Save</button>
                        <button onClick={handleCancelClick}>Cancel</button>
                    </td>
                </>
            ) : (
                <>
                    <td>{work.title}</td>
                    <td>{work.description}</td>
                    <td>{work.hours}</td>
                    <td>
                        <button onClick={handleDelete}>Delete</button>
                        <button onClick={handleEditClick}>Edit</button>
                    </td>
                </>
            )}
        </tr>
    );
};

export default WorkItem;
