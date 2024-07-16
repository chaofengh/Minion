import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addIdea, updateIdea } from '../store/ideasSlice';
import './IdeaForm.css';
import { formatCash } from '../../utils';

const IdeaForm = ({ idea, onCancel, onSubmit }) => {
    const dispatch = useDispatch();
    const [formData, setformData] = useState({
        name: '',
        description: '',
        weeklyRevenue: '',
        numWeeks: ''
    });

    const expectedReturn = formData.numWeeks * formData.weeklyRevenue;

    useEffect(() => {
        if (idea) {
            setformData(idea);
        }
    }, [idea]);

    const handleChange = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (expectedReturn < 1000000) {
            window.alert('Expected return needs to be 1 million dollars or more.');
            return;
        }
        if (idea) {
            dispatch(updateIdea(formData));
            onSubmit();
        } else {
            dispatch(addIdea(formData));
        }
        onCancel();
    };

    return (
        <div className='idea-form-container'>
            <h2 className='form-title'>{idea ? 'Edit Idea' : 'New Idea'}</h2>
            <form onSubmit={handleSubmit} className='idea-form'>
                <label className='form-label'>
                    Name:
                    <input
                        type='text'
                        name='name'
                        value={formData.name}
                        onChange={handleChange}
                        className='form-input'
                    />
                </label>
                <label className='form-label'>
                    Description:
                    <textarea
                        name='description'
                        value={formData.description}
                        onChange={handleChange}
                        className='form-textarea'>
                    </textarea>
                </label>
                <label className='form-label'>
                    Revenue/Week:
                    <input
                        type='number'
                        name='weeklyRevenue'
                        value={formData.weeklyRevenue}
                        onChange={handleChange}
                        className='form-input'
                    />
                </label>
                <label className='form-label'>
                    # of Weeks:
                    <input
                        type='number'
                        name='numWeeks'
                        value={formData.numWeeks}
                        onChange={handleChange}
                        className='form-input'
                    />
                </label>
                <label className='form-label'>
                    Expected Return: 
                    <span className='expected-return'>{formatCash(expectedReturn)}</span>
                </label>
                <div className='form-buttons'>
                    <button type='button' onClick={onCancel} className='cancel-button'>Cancel</button>
                    <button type='submit' className='save-button'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default IdeaForm;
