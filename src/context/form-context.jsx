import React, { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  return (
    <FormContext.Provider value={{ fields, setFields, formData, setFormData}}>
      {children}
    </FormContext.Provider>
  );
};
