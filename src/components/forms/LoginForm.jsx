import React from "react";
import FieldSet from "../FieldSet";
import Field from "../Field";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm();
  const submitForm = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitForm)}
        className="w-[600px] mx-auto py-20"
      >
        <FieldSet label="Enter a Login Details">
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is Required." })}
              className={`w-[300px] border  py-1 px-2 ${errors.email ? 'border-red-500': 'border-gray-300'}`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Your Password at least 8 Character",
                },
              })}
               className={`w-[300px] border  py-1 px-2 ${errors.password ? 'border-red-500': 'border-gray-300'}`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter a Password"
            />
          </Field>
          <Field>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded cursor-pointer"
            >
              Submit
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default LoginForm;
