"use client";

import React from "react";

const ErrorPage = ({ error, reset }) => {
  console.log(error);
  return (
    <main className="grid place-items-center h-[80vh]">
      <div className="text-primary">Unexpected error</div>
      <button className="btn" onClick={() => reset()}>
        Retry
      </button>
    </main>
  );
};

export default ErrorPage;
