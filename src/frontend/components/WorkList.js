import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWork, selectWork, selectError, selectLoading } from '../store/worksSlice';
import WorkItem from './WorkItem';
import WorkForm from './WorkForm';
import './WorkList.css';

const WorkList = ({ minionId }) => {
    const dispatch = useDispatch();
    const work = useSelector(selectWork);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const [addNewWork, setAddNewWork] = useState(false);

    useEffect(() => {
        dispatch(fetchWork(minionId));
    }, [dispatch, minionId]);

    const handleAddWork = () => {
        setAddNewWork(true);
    };
    
    const handleCancelAddWork = () => {
        setAddNewWork(false);
    };

    return (
        <div className="work-list">
            <h2>Work</h2>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <table className="work-table">
                <thead>
                    <tr>
                        <th className="title">Title</th>
                        <th className="description">Descr.</th>
                        <th className="hours">Hrs.</th>
                        <th className="actions">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {work.map((workItem) => (
                        <WorkItem key={workItem.id} work={workItem} />
                    ))}
                    {addNewWork && (
                        <WorkForm minionId={minionId} onCancel={handleCancelAddWork} />
                    )}
                </tbody>
            </table>
            {!addNewWork && (
                <button className='add-button' onClick={handleAddWork}>Add Work</button>
            )}
        </div>
    );
};

export default WorkList;
