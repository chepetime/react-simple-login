import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  authToken: "",
  loading: false,
  hasErrors: false,
};

const auth = createSlice({
  name: "auth",
  initialState,

  reducers: {
    setLoading: (state) => {
      state.loading = true;
    },
    setAuthToken: (state, { payload }) => {
      state.authToken = payload;
      state.loading = false;
    },
    setError: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

export const { setLoading, setAuthToken, setError } = auth.actions;

export const getAuthToken = (state) => state.auth;

export function login() {
  return async (dispatch) => {
    dispatch(setLoading());
    // This should be an API Call with success
    setTimeout(() => {
      dispatch(setAuthToken("fake-token"));
    }, 3000);
  };
}

export function logout() {
  return async (dispatch) => {
    dispatch(setAuthToken(""));
  };
}

export default auth.reducer;
