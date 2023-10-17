import React from "react";
import "../../styles/iconcss.css";
import Link from "next/link";
const login = () => {
  return (
    <div>
      <section>
        {" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span /> <span /> <span /> <span /> <span />{" "}
        <span /> <span /> <span /> <span />
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>
            <div className="form">
              <div className="inputBox">
                <input type="text" required /> <i>Username</i>
              </div>
              <div className="inputBox">
                <input type="password" required /> <i>Password</i>
              </div>
              <div className="links">
                <Link href="/">Forgot Password</Link>{" "}
                <Link href="signup">Signup</Link>
              </div>
              <div className="inputBox">
                <input type="submit" value="Sign In" />
              </div>
            </div>
          </div>
        </div>
      </section>{" "}
      {/* partial */}
    </div>
  );
};

export default login;
