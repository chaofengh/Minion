import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMinions, deleteMinion, selectMinions, selectLoading, selectError } from '../store/minionsSlice';
import { Link } from 'react-router-dom';
import MinionForm from './MinionForm';
import './AllMinions.css';

const AllMinions = () => {
  const dispatch = useDispatch();
  const minions = useSelector(selectMinions);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);
  const [isAddMinion, setIsAddMinion] = useState(false);

  useEffect(() => {
    dispatch(fetchMinions());
  }, [dispatch]);

  const handleDelete = (minionId) => {
    dispatch(deleteMinion(minionId));
  };

  const handleAddMinion = () => {
    setIsAddMinion(true);
  };

  const handleCancelAddMinion = () => {
    setIsAddMinion(false);
  };

  return (
    <div>
      <h1>Minions</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {isAddMinion ? (
        <div> 
          <MinionForm onCancel={handleCancelAddMinion} />
        </div>
      ) : (
        <div>
        <div className="minions-container">
          {minions.map(minion => (
            <div key={minion.id} className="minion-card">
              <Link to={`/minions/${minion.id}`} >
                <span>{minion.name}</span>
                <span>ID #{minion.id}</span>
              </Link>
              <button onClick={(e) => { e.stopPropagation(); handleDelete(minion.id); }}>X</button>
            </div>
          ))}
        </div>
        <div className="add-minion">
            <button onClick={handleAddMinion} className ='add-minion'>Add Minion</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMinions;
