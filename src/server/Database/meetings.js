const { type } = require('@testing-library/user-event/dist/type');
const faker = require('faker');

let meetingIdCounter = 1;

const createMeeting = () => {
  const options = [`Discussion about`, `Meeting for`, `Brainstorm`];
  const option = options[Math.floor(Math.random() * options.length)];
  const date = new Date(faker.date.future());
  return {
    id: `${meetingIdCounter++}`,
    time: date.toTimeString().slice(0, 5),
    date: date,
    day: date.toDateString(),
    note: `${option} ${faker.company.catchPhrase()}`,
  };
};

const isValidMeeting = (instance)=>{
    if (typeof instance.time !== 'string' || instance.time.length<4){
        throw new Error('Meeting time must be valid!');
    }

    if(!(instance.date instanceof Date)){
        throw new Error('Meeting date must be a JS Date object');
    }

    if(!instance.day || typeof instance.day !=='string'){
        throw new Error('Meeting must have a day property');
    }

    if(!instance.note || typeof instance.note !=='string'){
        throw new Error('Meeting must have a valid note property');
    }

    return true
}

const allMeetings = new Array(3).fill(0).map(createMeeting);

module.exports = {
  createMeeting,
  allMeetings,
  meetingIdCounter,
  isValidMeeting
};
