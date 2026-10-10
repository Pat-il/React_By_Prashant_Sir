import React from "react";

const LoadSpinner = () => {
  return (
    <div>
      <h1>
        <div className="d-flex justify-content-center spinner">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </h1>
    </div>
  );
};

export default LoadSpinner;
