import React from "react";

const Preloader = () => {
  return (
    <div className="preloader flex-column justify-content-center align-items-center">
      <img
        className="animation__shake"
        src="dist/img/book.png"
        alt="book"
        height="60"
        width="60"
      />
    </div>
  );
};

export default Preloader;
