import { GET_USERS, GET_USER, USERS_ERROR } from "../types";
import axios from "axios";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get(`http://jsonplaceholder.typicode.com/users`);
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const getUser = (userId) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://jsonplaceholder.typicode.com/users/${userId}`
    );
    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
