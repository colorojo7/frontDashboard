import React from "react";
import Button from "../Button";
import { Input, Select } from "../Inputs";
import Label from "../Label";
import { states } from "../../helpers/optionsArrays";

const RegisterForm = () => {
  return (
    <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
      <h1 className={` font-bold mb-3 text-2xl text-center`}>Register</h1>
      <form action="/api/users" method="POST">
        <div className="flex flex-col gap-4">
          <div>
            <Label htmlFor="name" />
            <Input fullName="name" />
            <Input fullName="last-name" />
          </div>

          <div>
            <Label text="date of birth" htmlFor="DOB" />
            <Input type="date" fullName="DOB" />
          </div>

          <div>
            <Label htmlFor="adress" text="where do you live?" />
            <Input fullName="adress" placeholder="Unit 0, 999 Street" />
            <Input fullName="city" placeholder="Location" />
            <div className="flex">
              <Select
                options={states}
                fullName="state"
                placeholder="choose one"
              />
              <Input fullName="post code" />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <Button textCenter={true}>Register</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
