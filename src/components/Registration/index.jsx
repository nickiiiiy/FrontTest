// Registration.jsx
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  updateLogin,
  updatePassword,
  updateRepeatPassword,
  registerUser,
  clearError,
} from "./registerSlice";

const Registration = () => {
  const dispatch = useDispatch();
  const { login, password, repeatPassword, error, registerStatus } =
    useSelector((state) => state.register);

  const handleLoginChange = (event) => {
    dispatch(updateLogin(event.target.value));
  };

  const handlePasswordChange = (event) => {
    dispatch(updatePassword(event.target.value));
  };

  const handleRepeatPasswordChange = (event) => {
    dispatch(updateRepeatPassword(event.target.value));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== repeatPassword) {
      dispatch(setError("Passwords do not match"));
      return;
    }
    dispatch(clearError());
    try {
      await dispatch(registerUser({ login, password }));
      // Redirect to main page
    } catch (error) {
      dispatch(setError(error.message));
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Регистрация</h2>
        <div>
          <label htmlFor="login">Логин:</label>
          <input
            type="text"
            id="login"
            value={login}
            onChange={handleLoginChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Пароль:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <div>
          <label htmlFor="repeatPassword">Повторить пароль:</label>
          <input
            type="password"
            id="repeatPassword"
            value={repeatPassword}
            onChange={handleRepeatPasswordChange}
            required
          />
        </div>
        {error && <div>{error}</div>}
        <div>
          <button type="submit">Зарегистрироваться</button>
        </div>
      </form>
    </div>
  );
};

export default Registration;
