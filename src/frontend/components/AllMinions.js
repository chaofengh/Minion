import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMinions, deleteMinion, selectMinions, selectLoading, selectError } from '../store/minionsSlice';
import { Link } from 'react-router-dom';
import MinionForm from './MinionForm.js'
import './AllMinions.css'; // Assuming you have a CSS file for styling

const AllMinions = () => {
  const dispatch = useDispatch();
  const minions = useSelector(selectMinions);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    dispatch(fetchMinions());
  }, [dispatch]);

  const handleDelete = (minionId) => {
    dispatch(deleteMinion(minionId));
  };

  const handleAddMinion = () => {
    setShowForm(true);
  };

  return (
    <div className="all-minions">
      <h1 className="title">Minions</h1>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div className="minions-list">
        {minions.map(minion => (
          <div key={minion.id} className="minion-item">
            <Link to={`/minions/${minion.id}`}>
              <span>{minion.name}</span>
            </Link>
            <button className="delete-button" onClick={(e) => { e.stopPropagation(); handleDelete(minion.id) }}>X</button>
          </div>
        ))}
        <button className="add-button" onClick={handleAddMinion}>+</button>
      </div>
      {showForm && <MinionForm />}
    </div>
  );
};

export default AllMinions;
