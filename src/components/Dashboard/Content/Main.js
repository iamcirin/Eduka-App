import React from "react";

const Main = () => {
  return (
    <section className="content">
      <div className="container-fluid">
        {/*  Small boxes (Stat box)*/}
        <div className="row">
          <div className="col-lg-3 col-6">
            {/*  small box*/}
            <div className="small-box bg-info">
              <div className="inner">
                <h3>150</h3>

                <p className="text-white">Number of students</p>
              </div>
              <div className="icon">
                <i className="ion ion-bag"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          {/*  ./col*/}
          <div className="col-lg-3 col-6">
            {/*  small box*/}
            <div className="small-box bg-success">
              <div className="inner">
                <h3>
                  53<sup style={{ fontSize: "20px" }}>%</sup>
                </h3>

                <p className="text-white">Present Students</p>
              </div>
              <div className="icon">
                <i className="ion ion-stats-bars"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          {/*  ./col*/}
          <div className="col-lg-3 col-6">
            {/*  small box*/}
            <div className="small-box bg-warning">
              <div className="inner">
                <h3>44</h3>

                <p className="text-white">Absent students</p>
              </div>
              <div className="icon">
                <i className="ion ion-person-add"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          {/*  ./col*/}
          <div className="col-lg-3 col-6">
            {/*  small box*/}
            <div className="small-box bg-danger">
              <div className="inner">
                <h3>65</h3>

                <p className="text-white">Logs</p>
              </div>
              <div className="icon">
                <i className="ion ion-pie-graph"></i>
              </div>
              <a href="#" className="small-box-footer">
                More info <i className="fas fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
          {/*  ./col*/}
        </div>
        {/*  /.row*/}
        {/*  Main row*/}
        <div className="row"></div>
        {/*  /.row (main row)*/}
      </div>
      {/* /.container-fluid*/}
    </section>
  );
};

export default Main;
