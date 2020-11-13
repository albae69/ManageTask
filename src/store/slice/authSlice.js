import {createSlice} from '@reduxjs/toolkit';

const Auth = {
  isLogin: false,
  user: null,
  token: null,
};

const auth = createSlice({
  name: 'auth',
  initialState: Auth,
  reducers: {
    login: (state) => {
      state.isLogin = true;
    },
    logout: (state) => {
      state.isLogin = false;
    },
  },
});

export const {login, logout} = auth.actions;

export default auth.reducer;
