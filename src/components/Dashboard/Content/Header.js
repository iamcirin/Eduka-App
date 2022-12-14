import React from "react";

const Header = ({ title }) => {
  return (
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="m-0">{title}</h1>
          </div>
        </div>
        {/* /.row*/}
      </div>
      {/* /.container-fluid*/}
    </div>
  );
};

export default Header;
