import React, {useEffect,useState} from "react";
import { useSelector,useDispatch } from "react-redux";
import { fetchIdeas,selectIdeas,selectLoading,selectError } from "../store/ideasSlice";
import IdeaDetail from './IdeaDetail';
import './AllIdeas.css';

const AllIdeas = ()=>{
    const dispatch = useDispatch()
    const ideas = useSelector(selectIdeas);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [selectedIdea,setSelectedIdea] = useState(null);

    useEffect(()=>{
        dispatch(fetchIdeas())
    },[dispatch])

    const handleSelectedIdea = (idea)=>{
        setSelectedIdea(idea)
    }

    return(
        <div>
            <h1>Ideas</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error:{error}</p>}
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Income</th>
                    </tr>
                </thead>
                <tbody>
                    {ideas.map(idea =>(
                        <tr key ={idea.id} onClick = {()=> handleSelectedIdea(idea)} >
                            <td>{idea.name}</td>
                            <td>${idea.weeklyRevenue * idea.numWeeks}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {selectedIdea && <IdeaDetail idea= {selectedIdea}/>}
        </div>
    )
}
export default AllIdeas;