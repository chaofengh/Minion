import { configureStore } from '@reduxjs/toolkit';
import minionsReducer from './minionsSlice';
import ideasReducer from './ideasSlice';
import meetingsReducer from './meetingsSlice';
import selectedMinionReducer from './SelectedMinion';
import workReducer from './worksSlice'
import selectedIdea from './selectedIdea';

const store = configureStore({
  reducer: {
    minions: minionsReducer,
    ideas: ideasReducer,
    meetings: meetingsReducer,
    work:workReducer,
    selectedMinion: selectedMinionReducer,
    selectedIdea:selectedIdea
  },
});

export default store;