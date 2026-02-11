import React from "react";
import FieldSet from "../FieldSet";
import Field from "../Field";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import NumberInput from "../NumberInput";

const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const { fields, append, remove } = useFieldArray({
    name: "socials",
    control,
  });
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
            <Controller
              name="age"
              control={control}
              render={({ field: { ...fields } }) => (
                <NumberInput
                  id="age"
                  className={` border  py-1 px-2 ${errors.age ? "border-red-500" : "border-gray-300"}`}
                  {...fields}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 0 and 100",
                },
              }}
            />
          </Field>

          {/* Picture */}
          <Field label="Add Picture" error={errors.picture}>
            <input
              {...register("picture", {
                required: "Picture is Required",
                minLength: {
                  value: 8,
                  message: "Picture at least 3 MB",
                },
              })}
              className={` border  py-1 px-2 ${errors.picture ? "border-red-500" : "border-gray-300"}`}
              type="file"
              name="picture"
              id="picture"
            />
          </Field>

          {/*Social link */}
          <FieldSet label="Enter Social Handel">
            {fields.map((field, index) => {
              return (
                <div
                  className="flex justify-between items-center w-max gap-1"
                  key={field.id}
                >
                  <Field label="Social Name">
                    <input
                      {...register(`Social [${index}].name`)}
                      className={`w-[300px] border  py-1 px-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      type="text"
                      name={`Social[${index}].name`}
                      id={`Social[${index}].name`}
                    />
                  </Field>

                  <Field label="Social URL">
                    <input
                      {...register(`Social [${index}].url`)}
                      className={`w-[300px] border  py-1 px-2 ${errors.email ? "border-red-500" : "border-gray-300"}`}
                      type="text"
                      name={`Social[${index}].url`}
                      id={`Social[${index}].url`}
                    />
                  </Field>
                  <button
                    onClick={() => remove(index)}
                    className="bg-red-500 px-4 mt-8 rounded cursor-pointer "
                  >
                    Delete
                  </button>
                </div>
              );
            })}
            <button
              onClick={() => append({ name: "", url: "" })}
              type="button"
              className="bg-green-500 p-2 rounded cursor-pointer"
            >
              Add Social Link
            </button>
          </FieldSet>
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
