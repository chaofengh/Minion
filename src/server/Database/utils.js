const findDataArrayByName = (db, name) => {
  switch (name) {
    case 'minions':
      return db.allMinions;
    case 'ideas':
      return db.allIdeas;
    case 'works':
      return db.allWork;
    case 'meetings':
      return db.allMeetings;
    default:
      return null;
  }
};

const getAllFromDatabase = (db, modelType) => {
  const model = findDataArrayByName(db, modelType);
  if (model === null) {
    return null;
  }
  return model.data;
};

const getFromDatabaseById = (db, modelType, id) => {
  const model = findDataArrayByName(db, modelType);
  if (model === null) {
    return null;
  }
  return model.data.find((element) => {
    return element.id === id;
  });
};

const addToDatabase = (db, modelType, instance) => {
  const model = findDataArrayByName(db, modelType);
  if (model === null) {
    return null;
  }
  if (model.isValid(instance)) {
    instance.id = `${model.nextId++}`;
    model.data.push(instance);
    return model.data[model.data.length - 1];
  }
};

const updateInstanceInDatabase = (db, modelType, instance) => {
  const model = findDataArrayByName(db, modelType);
  if (model === null) {
    return null;
  }
  const instanceIndex = model.data.findIndex((element) => {
    return element.id === instance.id;
  });
  if (instanceIndex > -1 && model.isValid(instance)) {
    model.data[instanceIndex] = instance;
    return model.data[instanceIndex];
  } else {
    return null;
  }
};

const deleteFromDatabasebyId = (db, modelType, id) => {
  const model = findDataArrayByName(db, modelType);
  if (model === null) {
    return null;
  }
  let index = model.data.findIndex((element) => {
    return element.id === id;
  });
  if (index !== -1) {
    model.data.splice(index, 1);
    return true;
  } else {
    return false;
  }
};

const deleteAllFromDatabase = (db, modelType) => {
  const model = findDataArrayByName(db, modelType);
  if (model === null) {
    return null;
  }
  model.data = [];
  return model.data;
};

module.exports = {
  findDataArrayByName,
  getAllFromDatabase,
  getFromDatabaseById,
  addToDatabase,
  updateInstanceInDatabase,
  deleteFromDatabasebyId,
  deleteAllFromDatabase,
};
