import React, {useState} from 'react';
import './IdeaDetail.css';
import IdeaEdit from './IdeaEdit'

const IdeaDetail = ({idea})=>{
    const [isEditing, setIsEditing] = useState(false);
    
    const handleEdit = ()=>{
        setIsEditing(true)
    }

    return(
        <div className = 'idea-detail'>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
            <div className = 'idea-stats'>
                <div>
                    <strong> Revenue/Week:</strong> ${idea.weeklyRevenue}
                </div>
                <div>
                    <strong># of Weeks:</strong>{idea.numWeeks}
                </div>
                <div>
                <strong>Expected Return:</strong> ${idea.weeklyRevenue * idea.numWeeks}
                </div>
            </div>
            {isEditing? (
                <IdeaEdit idea={idea} setIsEditing={setIsEditing} />
            ):(
                <button onClick ={handleEdit} >Edit</button>
            )}
        </div>
    )
}

export default IdeaDetail;