import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const Contextapi = () => {
  const { isHuman, setIsHuman } = useContext(authContext);
  return (
    <div>
      <h1>click on the checkbox to get authenticated</h1>
      {isHuman
        ? "you are now authenticated, you can proceed"
        : "you are not authenticated"}
        <br/>
      <input
        type="checkbox"
        value={isHuman}
        onChange={(e) => setIsHuman(e.target.checked)}
      />
      <label>I'm not a robot</label>
    </div>
  );
};

export default Contextapi;
