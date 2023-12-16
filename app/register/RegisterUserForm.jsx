"use client";
import React, { useState } from "react";

const RegisterUserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState("");

  const [success, setSuccess] = useState("test success");
  const [error, setError] = useState("test error");

  const handleSubmit = async (e) => {
    e.preventDefault();
  };

  return (
    <div className="grid place-items-center mt-28">
      <div className="shadow-lg p-5 rounded-lg border-t-4 border-yellow-600">
        <h1 className="text-xl font-bold my-4 text-yellow-600">Register</h1>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            className="w-96 border border-yellow-600 py-2 px-6 rounded-xl bg-zinc-100/40 outline-none"
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            minLength={3}
          />
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
            required
            minLength={6}
          />
          <div>
            <button className="w-full bg-yellow-600 text-white font-bold rounded-xl py-2">
              Register
            </button>
          </div>
        </form>

        {error && (
          <div className="bg-primary text-white w-fit text-sm mt-5 py-1 px-3 rounded-lg">
            {error}
          </div>
        )}
        {success && (
          <div className="bg-green-700 text-white w-fit text-sm mt-5 py-1 px-3 rounded-lg">
            {success}
          </div>
        )}
      </div>
    </div>
  );
};

export default RegisterUserForm;
