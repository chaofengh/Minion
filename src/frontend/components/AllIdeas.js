import React, {useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchIdeas,selectIdeas,deleteIdea,selectLoading,selectError } from "../store/ideasSlice";
import { Link } from 'react-router-dom';
import IdeaForm from "./IdeaForm";
import {formatCash} from '../../utils'
import './AllIdeas.css';

const AllIdeas = ()=>{
    const dispatch = useDispatch()
    const ideas = useSelector(selectIdeas);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [isAddIdea,setisAddIdea] = useState(false);

    useEffect(()=>{
        dispatch(fetchIdeas())
    },[dispatch])

    useEffect(()=>{

    },[ideas])


    const handleDelete=(idea)=>{
        dispatch(deleteIdea(idea))
    }

    const handleAddIdea = ()=>{
        setisAddIdea(true)
    }
    
    const handleCancelAddIdea=()=>{
        setisAddIdea(false)
    }

    return(
        <div>
            <h1>Ideas</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error:{error}</p>}
            {isAddIdea? (
                <IdeaForm onCancel={handleCancelAddIdea}/>
            ):(
                <div className='idea-container'>
                <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Income</th>
                        <th>Action Button</th>
                    </tr>
                </thead>
                <tbody>
                    {ideas.map(idea =>(
                        <tr key ={idea.id} >
                            <td>
                                <Link to={`/ideas/${idea.id}`} className='link'>
                                    {idea.name}
                                </Link>
                            </td>
                            <td>{formatCash(idea.weeklyRevenue * idea.numWeeks)}</td>
                            <td>
                                <button onClick={()=>handleDelete(idea)} className='button'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button onClick={handleAddIdea}  className='button'>Add Idea</button>
            </div>
            )}

        </div>
    )
}
export default AllIdeas;