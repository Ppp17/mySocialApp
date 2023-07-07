import React from "react";
import "./rightBar.scss";
function RightBar() {
  return (
    <div className="rightBar">
      <div className="contianer">
        <div className="item">
          <span>Suggestions For You</span>
          <div className="userInfo">
            <img
              src="https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Jane Doe</span>
          </div>
          <div className="buttons">
            <button>follow</button>
            <button>dismiss</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
