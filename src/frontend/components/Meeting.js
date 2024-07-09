import React from  'react';
import './Meeting.css'

const Meeting =({day,time,note})=>{
    <tr>
        <td>{time}</td>
        <td>{day}</td>
        <td>{note}</td>
    </tr>
}

export default Meeting;