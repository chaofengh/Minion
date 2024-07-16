
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meeting from './Meeting';

import {
  fetchMeetings,
  createMeeting,
  deleteAllMeetings,
  selectMeetings,
  selectLoading,
  selectError
} from '../store/meetingsSlice';
import './AllMeetings.css';

const AllMeetings = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(selectMeetings);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchMeetings());
    const intervalId = setInterval(() => {
      dispatch(createMeeting());
    }, Math.random() * 10000 + 3000);

    return () => clearInterval(intervalId);
  }, [dispatch]);

  const handleDeleteAll = () => {
    dispatch(deleteAllMeetings());
  };

  const allMeetings = meetings.map((meeting) => (
    <Meeting key={meeting.id} day={meeting.day} time={meeting.time} note={meeting.note} />
  ));

  return (
    <div id="meetings-landing">
      <div className="label meetings-label">Meetings</div>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <div id="meetings-table">
        <table>
          <thead>
            <tr>
              <th id="th-time">Time</th>
              <th id="th-date">Date</th>
              <th id="th-note">Note</th>
            </tr>
          </thead>
          <tbody>{allMeetings}</tbody>
        </table>
        <button onClick={handleDeleteAll}>Delete All Meetings</button>
      </div>
    </div>
  );
};

export default AllMeetings;