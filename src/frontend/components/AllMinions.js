import React, {useEffect,useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMinions, deleteMinion, selectMinions, selectLoading, selectError } from '../store/minionsSlice';
import MinionForm from './MinionForm';
import MinionDetail from './MinionDetail';
import './AllMinions.css'; // Assuming you have a CSS file for styling

const AllMinoins = ()=>{
    const dispatch = useDispatch();
    const minions = useSelector(selectMinions);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    const [SelectedMinion,setSelectedMinion]= useState(null)
    const [showForm, setShowForm] = useState(false);

    useEffect(()=>{
        dispatch(fetchMinions())
    },[dispatch])

    const handleDelete = (minionId)=>{
        dispatch(deleteMinion(minionId))
    }
    
    const handleSelectedMinion = (minion)=>{
        setSelectedMinion(minion)
    }
    
    const handleAddMinion = ()=>{
        setShowForm(true)
    }
    
    return(
        <div>
            <h1>All Minions</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error:{error}</p>}
            <div>
                {minions.map(minion =>(
                    <div key = {minion.id} onClick= {()=>handleSelectedMinion(minion)}>
                        <span> {minion.name} </span>
                        <button onClick ={(e)=> {e.stopPropagation(); handleDelete(minion.id)}}></button>
                    </div>
                ))}
                <button onClick ={handleAddMinion} ></button>
            </div>
            {showForm && <MinionForm/>}
            {SelectedMinion && <MinionDetail minion ={SelectedMinion}/>}
        </div>
        
    )
}

export default AllMinoins;

