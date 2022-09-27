import React from "react";

const Avatar = () => {
  return (
    <div className="user-panel mt-3 pb-3 mb-3 d-flex">
      <div className="image">
        <img
          src="dist/img/avatar4.png"
          className="img-circle elevation-2"
          alt="User Image"
        />
      </div>
      <div className="info">
        <a href="#" className="d-block">
          John Doe
        </a>
      </div>
    </div>
  );
};

export default Avatar;
