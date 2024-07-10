import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateMinion } from '../store/minionsSlice';
import WorkList from './WorkList';
import './MinionDetail.css';

const MinionDetail = ({ minion }) => {
    const dispatch = useDispatch();
    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({ ...minion });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateMinion(formData));
        setIsEditing(false);
    };

    return (
        <div className="minion-detail">
            <h2>Minion ID #{minion.id}</h2>
            {isEditing ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Name:
                        <input type="text" name="name" value={formData.name} onChange={handleChange} />
                    </label>
                    <label>
                        Title:
                        <input type="text" name="title" value={formData.title} onChange={handleChange} />
                    </label>
                    <label>
                        Salary:
                        <input type="number" name="salary" value={formData.salary} onChange={handleChange} />
                    </label>
                    <label>
                        Weaknesses:
                        <textarea name="weaknesses" value={formData.weaknesses} onChange={handleChange}></textarea>
                    </label>
                    <button type="submit">Save</button>
                </form>
            ) : (
                <div>
                    <p>Name: {minion.name}</p>
                    <p>Title: {minion.title}</p>
                    <p>Salary: {minion.salary}</p>
                    <p>Weaknesses: {minion.weaknesses}</p>
                    <button onClick={() => setIsEditing(true)}>Edit</button>
                </div>
            )}
            <WorkList minionId={minion.id} />
        </div>
    );
};

export default MinionDetail;
