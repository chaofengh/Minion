import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWork, selectWork, selectError, selectLoading } from '../store/worksSlice';
import WorkForm from './WorkForm';
import WorkItem from './WorkItem';
import './WorkList.css';

const WorkList = ({ minionId }) => {
    const dispatch = useDispatch();
    const work = useSelector(selectWork);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        dispatch(fetchWork(minionId));
    }, [dispatch, minionId]);

    const handleAddWork = () => {
        setShowForm(true);
    };

    return (
        <div className="work-list">
            <h2>Work</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                {work.map((workItem) => (
                    <WorkItem key={workItem.id} work={workItem} />
                ))}
                <button className="add-button" onClick={handleAddWork}>Add Work</button>
            </div>
            {showForm && <WorkForm minionId={minionId} />}
        </div>
    );
};

export default WorkList;
