import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <h1 className={` font-bold mb-3 text-2xl text-center`}>Register</h1>
      <div className="flex justify-center">
        <Button >
          <Link to="/dashboard" className="py-2 w-full h-full">
            Register
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default RegisterForm;
