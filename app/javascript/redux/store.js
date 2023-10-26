import { configureStore } from '@reduxjs/toolkit';
import greetingsReducer from './greeting/greetingSlice';

const store = configureStore({
  reducer: {
    greetings: greetingsReducer,
  },
});

export default store;