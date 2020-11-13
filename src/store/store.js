import {configureStore} from '@reduxjs/toolkit';
import auth from './slice/authSlice';

const store = configureStore({
  reducer: {
    auth: auth,
  },
});
export default store;
