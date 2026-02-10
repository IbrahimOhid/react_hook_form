import React from "react";
import FieldSet from "../FieldSet";
import Field from "../Field";
import { useFieldArray, useForm } from "react-hook-form";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {fields, append, remove} = useFieldArray()
  const submitData = (formData) => {
    console.log(formData);
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit(submitData)}
        className="w-[600px] mx-auto py-20"
      >
        <FieldSet label="Enter a Registration Details">
          {/* Email */}
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", { required: "Email is Required." })}
              className={` border  py-1 px-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter a Email Address"
            />
          </Field>
          {/* Password */}
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 8,
                  message: "Password at least 8 Character",
                },
              })}
              className={` border  py-1 px-2 ${errors.password ? "border-red-500" : "border-gray-300"}`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter a Password Address"
            />
          </Field>
          {/* Full Name */}
          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", { required: "Full Name is Required" })}
              className={` border  py-1 px-2 ${errors.fname ? "border-red-500" : "border-gray-300"}`}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter a Full Name"
            />
          </Field>
            {/* Age */}
          <Field label="Age" error={errors.age}>
            <input
              {...register("age", { required: "Age is Required", 
                max:{
                    value:100,
                    message: "Age Must be between 0 and 100"
                }
               })}
              className={` border  py-1 px-2 ${errors.age ? "border-red-500" : "border-gray-300"}`}
              type="number"
              name="age"
              id="age"
              placeholder="Enter a Age"
            />
          </Field>
          {/*Button*/}
          <Field>
            <button
              type="submit"
              className="bg-blue-500 text-white p-2 rounded cursor-pointer"
            >
              Register
            </button>
          </Field>
        </FieldSet>
      </form>
    </div>
  );
};

export default RegistrationForm;
