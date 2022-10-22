import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FormErrorMessage } from "./form-error-message";


const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


export const Form = () => {
  const [salary, setSalary] = useState("0");
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      dob: "",
      favouriteColor: "",
      salary: "0"
    }
  })
  const onSubmit = (data) => console.log(data);
  const onError = (data) => console.log("ERROR", data);

  const validationSchema = {
    name: { required: 'Please enter your full name' },
    email: { required: 'Please enter your email', pattern: {
      value: EMAIL_REGEX,
      message: 'Please ensure you have entered your email correctly'
    }},
    dob: { required: 'Please enter your date of birth' },
    favouriteColor: { required: 'Please enter your favourite colour' },
    salary: { required: 'Please provided a salary', min: {
      value: 70000,
      message: 'Please provide a figure higher than £70000'
    }}
  }

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)}>
        <input
          {...register("name", validationSchema.name)}
          placeholder="Full name"
        />
        <FormErrorMessage errors={errors} name={"name"} />
        <input
          type="input"
          {...register("email", validationSchema.email)}
          placeholder="email"
        />
        <FormErrorMessage errors={errors} name={"email"} />
        <input
          type="date"
          {...register("dob", validationSchema.dob)}
        />
        <FormErrorMessage errors={errors} name={"dob"} />
        <input
          {...register("favouriteColor", validationSchema.favouriteColor)}
          placeholder="Favourite Colour"
        />
        <FormErrorMessage errors={errors} name={"favouriteColor"} />
        <input
          type="range"
          min="0"
          max="100000"
          step="1000"
          {...register("salary", validationSchema.salary)}
          onChange={(e) => setSalary(e.target.value)}
        />

        <p>£{salary}</p>
        <FormErrorMessage errors={errors} name={"salary"} />
        <input type="submit" />
      </form>
    </>
  )
}
