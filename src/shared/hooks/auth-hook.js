import { useCallback, useState, useEffect, useContext } from "react";
import { AuthContext } from "../context/auth-context";

let logoutTimer;

export const useAuth = () => {
    const [token, setToken] = useState(null);
  const [userId, setUserId] = useState({});
  const [tokenExpiration, setTokenExpiration] = useState();
  const auth = useContext(AuthContext)
 

  const login = useCallback((uid, token, expirationDate) => {
    setToken(token);
    setUserId(uid);
    const tokenExpirationDate = expirationDate || new Date(new Date().getTime() + 1000 * 60 *60);
    setTokenExpiration(tokenExpirationDate);

    localStorage.setItem('userData', JSON.stringify({userId: uid, token: token, expiration: tokenExpirationDate.toISOString() }))
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUserId(null);
    localStorage.removeItem('userData');
    setTokenExpiration(null);
    
  }, []);

  useEffect(() => {
    if (token && tokenExpiration) {
      const remainingTime = tokenExpiration.getTime() - new Date().getTime();
      logoutTimer = setTimeout(logout, remainingTime);
    }else{
      clearTimeout(logoutTimer);
    }
  }, [token, logout, tokenExpiration])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'));
    if (storedData && storedData.token && new Date(storedData.expiration) > new Date()) {
      login(storedData.userId, storedData.token, new Date(storedData.expiration));
    }
  }, [login]);

  return { token, login, logout, userId };
};
