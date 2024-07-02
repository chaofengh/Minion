const minions = require('./minions');
const ideas = require('./ideas');
const work = require('./work');
const meetings = require('./meetings');
const utils = require('./utils');

const db = {
  allMinions: {
    data: minions.allMinions,
    nextId: minions.minionIdCounter,
    isValid: minions.isValidMinion,
  },
  allIdeas: {
    data: ideas.allIdeas,
    nextId: ideas.ideaIdCounter,
    isValid: ideas.isValidIdea,
  },
  allWork: {
    data: work.allWork,
    nextId: work.workIdCounter,
    isValid: work.isValidWork,
  },
  allMeetings: {
    data: meetings.allMeetings,
    nextId: meetings.meetingIdCounter,
    isValid: meetings.isValidMeeting,
  }
};

module.exports = {
  createMeeting: meetings.createMeeting,
  getAllFromDatabase: (modelType) => utils.getAllFromDatabase(db, modelType),
  getFromDatabaseById: (modelType, id) => utils.getFromDatabaseById(db, modelType, id),
  addToDatabase: (modelType, instance) => utils.addToDatabase(db, modelType, instance),
  updateInstanceInDatabase: (modelType, instance) => utils.updateInstanceInDatabase(db, modelType, instance),
  deleteFromDatabasebyId: (modelType, id) => utils.deleteFromDatabasebyId(db, modelType, id),
  deleteAllFromDatabase: (modelType) => utils.deleteAllFromDatabase(db, modelType),
};
