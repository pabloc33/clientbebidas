import { publicRequest } from "../requestMethod";
import {
  registerFailure,
  registerStart,
  registerSuccess,
} from "./registerRedux";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, newUser) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", newUser);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};
