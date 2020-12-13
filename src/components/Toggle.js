// Toggle.js
import React from "react";
import { func, string } from "prop-types";
import styled from "styled-components";

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === "light";
  return (
    <button
      style={{
        color: theme === "light" ? "#24262b" : "white",
        background: theme === "light" ? "white" : "#24262b",
      }}
      className="togglebtn"
      onClick={toggleTheme}
    >
      {theme === "light" ? "Light theme" : "Dark theme"}
    </button>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
};

export default Toggle;
