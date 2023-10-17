import React from "react";
import {FaUserGraduate, FaUsers} from "react-icons/fa";
import {FaUserPen} from "react-icons/fa6";

export default function OverviewCounter() {
  return (
    <div className="funcounter br">
      <div className="countercol">
        <FaUserGraduate
          style={{
            color: "#8f41b0",
            background: "#7d0cad20",
            fontSize: "52px",
            padding: "10px",
          }}
        />
        <span className="counternum">
          <span data-num={2}>2</span>+
        </span>
        <span className="countercap">শিক্ষার্থী</span>
      </div>
      <div className="countercol">
        <FaUserPen
          style={{
            color: "#27b737",
            background: "#27b73725",
            fontSize: "52px",
            padding: "10px",
          }}
        />
        <span className="counternum">
          <span data-num={5}>5</span>+
        </span>
        <span className="countercap">শিক্ষক ও শিক্ষিকা</span>
      </div>
      <div className="countercol">
        <FaUsers
          style={{
            color: "#ff5722",

            fontSize: "52px",
            background: "#ff572220",
            padding: "10px",
          }}
        />
        <span className="counternum">
          <span data-num={1}>1</span>+
        </span>
        <span className="countercap">কর্মকত্র্রী</span>
      </div>
    </div>
  );
}
