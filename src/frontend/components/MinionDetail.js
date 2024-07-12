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
    return <p>No minion found</p>;
  }

  return (
    <div className='minion-detail'>
      <h2 className='minion-id'>Minion ID#{minion.id}</h2>
      {isEditing ? (
        <MinionForm
          formData={minion}
          onCancel={() => { setIsEditing(false); }}
          onSubmit={handleUpdateMinion}
        />
      ) : (
        <div className='minion-info'>
          <p>Name: {minion.name}</p>
          <p>Title: {minion.title}</p>
          <p>Weakness: {minion.weaknesses}</p>
          <button onClick={() => { setIsEditing(true); }} className='edit-button'>Edit</button>
        </div>
      )}
      <WorkList minionId={minion.id} />
    </div>
  );
}

export default MinionDetail;
