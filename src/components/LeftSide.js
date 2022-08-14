import React, { useContext, useState } from "react";
import { ThemeContext } from "../App";
//// css
import "../css/leftSide.css";
import { FcIdea } from "react-icons/fc";
import { FcNoIdea } from "react-icons/fc";

function LeftSide() {
  const [show, setShow] = useState(false);
  const [bg, setBg] = useState("light");
  const { toggleTheme, isDark } = useContext(ThemeContext);
  return (
    <div className="mainLeftSide">
      <div className="modeDiv">
        <span onClick={toggleTheme}>
          {isDark ? (
            <FcIdea className="positionLight" />
          ) : (
            <FcNoIdea className="positionLight" />
          )}
        </span>
        {/* {show ? <p style={{ html: "black" }}>show</p> : <p>hide</p>} */}
      </div>
    </div>
  );
}

export default LeftSide;
