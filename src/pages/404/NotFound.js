import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="--center-all" style={{ minHeight: "80vh" }}>
      <h2>Page Not Found</h2>
      <p>The page you were looking for could not be found.</p>
      <br />
      <Link to="/">&#8592; Back to Home</Link>
    </div>
  );
};

export default NotFound;
