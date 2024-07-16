import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchMinionById, selectSelectedMinion, selectloading, selectError } from "../store/SelectedMinion";
import { updateMinion } from "../store/minionsSlice";
import WorkList from './WorkList';
import './MinionDetail.css';
import MinionForm from "./MinionForm";

const MinionDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const minion = useSelector(selectSelectedMinion);
  const loading = useSelector(selectloading);
  const error = useSelector(selectError);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    dispatch(fetchMinionById(id));
  }, [id, dispatch]);

  const handleUpdateMinion = (formData) => {
    dispatch(updateMinion(formData));
    setIsEditing(false);
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!minion) {
    return <p>Minion not Exist</p>;
  }

  return (
    <div className='minion-detail-container'>
      <div className='minion-detail'>
        <h2 className='minion-id'>Minion ID#{minion.id}</h2>
        {isEditing ? (
          <MinionForm
            formData={minion}
            onCancel={() => { setIsEditing(false) }}
            onSubmit={handleUpdateMinion}
          />
        ) : (
          <div className='minion-info'>
            <div className='minion-detail-field'>
              <strong>Name: </strong>
              <span>{minion.name}</span>
            </div>
            <div className='minion-detail-field'>
              <strong>Title: </strong>
              <span>{minion.title}</span>
            </div>
            <div className='minion-detail-field'>
              <strong>Weakness: </strong>
              <span>{minion.weaknesses}</span>
            </div>
            <button onClick={() => { setIsEditing(true) }} className='edit-button'>Edit</button>
          </div>
        )}
        <div className="work-section">
          <h3>Work</h3>
          <WorkList minionId={minion.id} />
        </div>
      </div>
    </div>
  );
}

export default MinionDetail;
