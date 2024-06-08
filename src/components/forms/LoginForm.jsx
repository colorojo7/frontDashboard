import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import Input from "../Input";
import { useAuth } from "../../auth/AuthProvider";

const LoginForm = () => {
  const { login } = useAuth();

  const userCredentials = {};
  const handleLoggin = () => login(userCredentials);

  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <h1 className={` font-bold mb-3 text-2xl text-center`}>Login</h1>
      <form>
        <div className="flex flex-col gap-3">
          <Input fullName="email" />
          <Input fullName="password" />
        </div>
        <div className="flex justify-center">
          <Button onClick={handleLoggin}>
            <Link to="/dashboard" className="py-2 w-full h-full">
              Login
            </Link>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
