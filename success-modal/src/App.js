import React, { useEffect } from "react";

import WarningRoundedIcon from "@mui/icons-material/WarningRounded";
import "./App.css";
function App() {
  return (
    <>
      <div className="blurBackground">
        <div className="registerContainer">
          <div className="registerWrapper">
            <div className="cancleRegister">X</div>
            <div className="header">Registration Successful</div>
            <div className="body">
              <p>
                Thats's right, have a go on this quiz for free.It wont't cost
                you any tokens.But your score will still count on the
                leaderboard and you couldstill win a share of the cash prize!How
                cool is that!
              </p>

              <p>
                By clicking Continueyou are aggering to the Quizando
                <a style={{ textDecoration: "none" }} href="">
                  Terms and Conditions
                </a>
              </p>

              <button className="continueButtonFinal">Continue</button>
            </div>

            <div className="registerfooter">
              <p>
                <span className="bold">WARNING!</span> to ensure ptimum
                performance of the quiz platform,
                <span className="bold">DO NOT</span> have any other window tabs
                or software runnung in background
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
