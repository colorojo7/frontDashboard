import React from "react";
import Button from "../Button";
import { Link } from "react-router-dom";
import { Input } from "../Inputs";
import { useAuth } from "../../auth/AuthProvider";
import routes from "../../routers/routes";

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
        <div >
          <Link to={routes.dashboard.home} className="flex justify-center">
            <Button onClick={handleLoggin} textCenter={true} >
              Login
            </Button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
