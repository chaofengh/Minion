import React, {useEffect,useState} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { fetchWork,selectWork,selectError } from '../store/worksSlice';
import WorkForm from './WorkForm';
import WorkItem from './WorkItem'
import { selectloading } from '../store/SelectedMinion';

const WorkList =({minionId})=>{
    const dispatch = useDispatch();
    const work = useSelector(selectWork);
    const loading = useSelector(selectloading);
    const error = useSelector(selectError);
    const [showForm,setShowForm] = useState(false)

    useEffect(()=>{
        dispatch(fetchWork(minionId))
    },[dispatch,minionId])

    const handleAddWork= ()=>{
        setShowForm(true)
    }

    return(
        <div>
            <h2>Work</h2>
            {loading && <p>Loading...</p>}
            {error &&<p>Error:{error}</p>}
            <div>
                {work.map(workitem =>(
                    <WorkItem key={workitem.id} work={workitem} />
                ))}
                <button onCLick={handleAddWork}>Add Work</button>
            </div>
            {showForm && <WorkForm minionId={minionId} />}
        </div>
    )
}

export default WorkList;