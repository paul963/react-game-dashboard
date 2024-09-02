import React from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12">
          <h1>Oops</h1>
          <p>
            {isRouteErrorResponse(error)
              ? "Page does not exist!"
              : "An unexpected error ocured!"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
