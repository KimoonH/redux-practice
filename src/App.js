import { useState } from "react";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { click } from "@testing-library/user-event/dist/click";

function App() {
  const count = useSelector(state => state.count)
  let id = useSelector(state => state.id)
  let password = useSelector(state => state.password)
  const dispatch = useDispatch();
  const increase = () => {
    dispatch({ type: "INCREMENT", payload: { num: 5 } })
  }
  const login = () => {
    dispatch({ type: "LOGIN", payload: { id: "kimoon", password: "1234" } })
  }
  const decrease = () => {
    dispatch({ type: "DECREASE", payload: { num: 5 } })
  }
  return (
    <div>
      <h1>
        {id}, {password}
      </h1>
      <h1>{count}</h1>
      <button onClick={increase}>증가!</button>
      <button onClick={login}>Login</button>
      <button onClick={decrease}>감소!</button>
    </div>
  );
}

export default App;
