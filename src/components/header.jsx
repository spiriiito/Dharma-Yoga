import React from "react";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text" style={{ margin: "0 auto", float: "none" }}>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Book a Class
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
