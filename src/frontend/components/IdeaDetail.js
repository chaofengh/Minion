import React,{useEffect, useState} from 'react';
import './IdeaDetail.css'
import IdeaForm from './IdeaForm';
import { useParams } from 'react-router-dom';
import { fetchIdeasById,selectSelectedIdea,selectLoading,selectError } from '../store/selectedIdea';
import { useDispatch,useSelector } from 'react-redux';
import {formatCash} from '../../utils'

const IdeaDetail = ()=>{
    const {id} = useParams()
    const dispatch = useDispatch()
    const idea = useSelector(selectSelectedIdea)
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [isEditing,setIsEditing] = useState(false)

    useEffect(()=>{
        dispatch(fetchIdeasById(id))
    },[id,dispatch])


    if (loading) {
        return <p>Loading...</p>;
      }
    if (error) {
        return <p>Error: {error}</p>;
      }
      
    if(!idea){
        return <p>Idea not exist</p>
    }

    return (
        <div className='idea-detail'>
            <h2 className ='idea-id'>Idea ID# ${idea.id}</h2>
            {isEditing? (
                <IdeaForm idea={idea} onCancel={()=>setIsEditing(false)} onSubmit={()=>setIsEditing(false)}/>
            ):(
                <div>
                <div className='idea-info' >
                    <p><strong>Name: </strong>{idea.name}</p>
                    <p><strong>Description: </strong>{idea.description}</p>
                    <p><strong>WeeklyRevenue: </strong>{formatCash(idea.weeklyRevenue)}</p>
                    <p><strong># of Weeks: </strong> {idea.numWeeks}</p>
                    <p><strong>Expected Return: </strong>{formatCash(idea.weeklyRevenue * idea.numWeeks)}</p>
                </div>
                <button onClick={()=>setIsEditing(true)} className='edit-button'>Edit</button>
                </div>
            )}
        </div>
    )

}

export default IdeaDetail