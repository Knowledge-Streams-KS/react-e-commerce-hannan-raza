import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>ERROR 404</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
};

export default ErrorPage;
