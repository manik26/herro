import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPages = () => {
  const { error, status } = useRouteError();
  return (
    <div>
      <div>
        <img
          className="mx-auto h-2/5 w-2/5 "
          src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-5529.jpg?w=2000"
          alt=""
        />

        <div className="w-25 text-center">
          <h2 className="mb-2">
            <span className="font-bold">Error</span> {status || 404}
          </h2>
          <p className="font-bold mb-1">{error?.message}</p>
          <Link to="/" className="font-bold text-2xl">
            Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPages;
