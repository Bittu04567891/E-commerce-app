import { createSlice } from "@reduxjs/toolkit";
import { clearCart, saveCart } from "./cartRedux";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    // token: null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    logOut: (state) => {
      state.isFetching = false;
      state.currentUser = null;
      state.error = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
  userSlice.actions;
export const selectUserId = (state) => state.user.currentUser?._id;
export const logoutUser = () => async (dispatch, getState) => {
  const {
    user: { currentUser },
    cart,
  } = getState();
  if (currentUser) {
    await dispatch(saveCart(currentUser._id, cart));
  }
  dispatch(logOut());
  dispatch(clearCart());
};
export default userSlice.reducer;
