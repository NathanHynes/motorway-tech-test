import React from "react";

export const FormErrorMessage = ({ errors, name }) => {
  if (!errors) {
    return null;
  }

  const message = errors[name]?.message;

  return <div>{message}</div>;
}
