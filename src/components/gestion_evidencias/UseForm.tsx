import React, { useState } from "react";

export const UseForm = (callback: any, initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  
    if (event.target.type === "checkbox")
      setValues({ ...values, [event.target.name]: event.target.checked });
    else{
      setValues({ ...values, [event.target.name]: event.target.value });
    }
    
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await callback();
    //setValues(initialState)
  };

  return {
    onChange,
    onSubmit,
    values,
  };
};
