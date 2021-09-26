import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navigation = ({ userObj }) => {
  return (
    <nav>
      <ul style={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: 50, textAlign: "center" }}>
        <li>
          <Link to="/" style={{ display: "flex", justifyContent: "center", color: "#112D4E", fontSize: 38, marginBottom: 20 }}>
            NWITTER
          </Link>
          <p style={{ display: "flex", justifyContent: "center", color: "#112D4E", marginBottom: 30 }}>하루의 생각을 공유해 보세요</p>
        </li>
        <li>
          <Link to="/profile" style={{ display: "flex", flexDirection: "column", alignItems: "center", fontSize: 12 }}>
            <FontAwesomeIcon icon={faUser} color={"#3f72af"} size="2x" />
            <span style={{ marginTop: 10, color: "#3f72af" }}>{userObj.displayName ? `${userObj.displayName}의 Profile` : "Profile"}</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
