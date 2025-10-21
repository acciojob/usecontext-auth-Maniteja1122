import React, { useContext } from "react";
import { authContext } from "../context/AuthProvider";

const Contextapi = () => {
  const { isHuman, setIsHuman } = useContext(authContext);

  return (
    <div>
      <h1>Click on the checkbox to get authenticated</h1>

      <p className="authText">
        {isHuman
          ? "You are now authenticated, you can proceed"
          : "You are not authenticated"}
      </p>

      <br />

      <input
        type="checkbox"
        id="authCheck"
        checked={isHuman}
        onChange={(e) => setIsHuman(e.target.checked)}
      />
      <label htmlFor="authCheck">I'm not a robot</label>
    </div>
  );
};

export default Contextapi;
