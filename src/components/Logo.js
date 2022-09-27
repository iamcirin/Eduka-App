import React from "react";

const Logo = () => {
  return (
    <a href="index3.html" className="brand-link">
      <img
        src="dist/img/book.png"
        alt="Eduka-App"
        className="brand-image img-circle elevation-3"
        style={{ opacity: 0.8 }}
      />
      <span className="brand-text font-weight-light">Eduka App</span>
    </a>
  );
};

export default Logo;
