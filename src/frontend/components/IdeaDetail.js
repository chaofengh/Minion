import React, { useEffect, useState } from 'react';
import './IdeaDetail.css';
import IdeaForm from './IdeaForm';
import { useParams } from 'react-router-dom';
import { fetchIdeasById, selectSelectedIdea, selectLoading, selectError } from '../store/selectedIdea';
import { useDispatch, useSelector } from 'react-redux';
import { formatCash } from '../../utils';

const IdeaDetail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const idea = useSelector(selectSelectedIdea);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [isEditing, setIsEditing] = useState(false);

    useEffect(() => {
        dispatch(fetchIdeasById(id));
    }, [id, dispatch]);

    if (loading) {
        return <p>Loading...</p>;
    }
    if (error) {
        return <p>Error: {error}</p>;
    }
    if (!idea) {
        return <p>Idea not exist</p>;
    }

    return (
        <div className='idea-detail-container'>
            <div className='idea-detail'>
                <h2 className='idea-id'>Idea ID# {idea.id}</h2>
                {isEditing ? (
                    <IdeaForm idea={idea} onCancel={() => setIsEditing(false)} onSubmit={() => setIsEditing(false)} />
                ) : (
                    <div className='idea-info'>
                        <div className='idea-detail-field'>
                            <strong>Name: </strong>
                            <span>{idea.name}</span>
                        </div>
                        <div className='idea-detail-field'>
                            <strong>Description: </strong>
                            <span>{idea.description}</span>
                        </div>
                        <div className='idea-detail-field'>
                            <strong>Weekly Revenue: </strong>
                            <span>{formatCash(idea.weeklyRevenue)}</span>
                        </div>
                        <div className='idea-detail-field'>
                            <strong># of Weeks: </strong>
                            <span>{idea.numWeeks}</span>
                        </div>
                        <div className='idea-detail-field'>
                            <strong>Expected Return: </strong>
                            <span>{formatCash(idea.weeklyRevenue * idea.numWeeks)}</span>
                        </div>
                        <button onClick={() => setIsEditing(true)} className='edit-button'>Edit</button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default IdeaDetail;
