"use client";

import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");

  const [error, setError] = useState("test error");

  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className="grid place-items-center mt-28">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-yellow-600">
        <h1 className="text-xl font-bold my-4 text-yellow-600">Login</h1>
        <form onSubmit={submitHandler} className="flex flex-col gap-4">
          <input
            className="w-96 border border-yellow-600 py-2 px-6 rounded-xl bg-zinc-100/40 outline-none"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-96 border border-yellow-600 py-2 px-6 rounded-xl bg-zinc-100/40 outline-none"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            minLength={6}
            required
          />
          <div>
            <button className="w-full bg-yellow-600 text-white font-bold rounded-xl py-2">
              Login
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-primary text-white w-fit text-sm mt-5 py-1 px-3 rounded-lg">
            {error}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
