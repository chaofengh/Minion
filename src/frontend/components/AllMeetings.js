import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Meeting from './Meeting';

import {
  fetchMeetings,
  createMeeting,
  deleteAllMeetings,
  selectMeetings
} from '../store/meetingsSlice';
import './AllMeetings.css';

const AllMeetings = () => {
  const dispatch = useDispatch();
  const meetings = useSelector(selectMeetings);


  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    dispatch(fetchMeetings());

    const addMeeting = () => {
      dispatch(createMeeting());
      const newTimeoutId = setTimeout(addMeeting, Math.random() * 10000 + 3000);
      setTimeoutId(newTimeoutId);
    };

    addMeeting();

    // Cleanup function to clear timeout
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [dispatch, timeoutId]); // Adding timeoutId as a dependency

  const handleDeleteAll = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    dispatch(deleteAllMeetings());
  };

  const allMeetings = meetings.map(meeting => (
    <Meeting key={meeting.id} day={meeting.day} time={meeting.time} note={meeting.note} />
  ));

  return (
    <div id="meetings-landing">
      <div className="label meetings-label">Meetings</div>
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
