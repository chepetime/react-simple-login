import { useDispatch, useSelector } from "react-redux";
import {
  getAuthToken,
  login as setLogin,
  logout as setLogout,
} from "features/auth/authSlice";

export default function useAuth() {
  const dispatch = useDispatch();
  const { authToken, loading, hasErrors } = useSelector(getAuthToken);

  function login({ username, password }) {
    if (loading) return false;
    dispatch(setLogin({ username, password }));
  }

  function logout() {
    if (!authToken) return false;
    dispatch(setLogout());
  }

  return { authToken, loading, hasErrors, login, logout };
}
