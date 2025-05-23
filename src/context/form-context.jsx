import React, { createContext, useContext, useState, useEffect } from 'react';

const FormContext = createContext();

export const useForm = () => useContext(FormContext);

export const FormProvider = ({ children }) => {
  const [fields, setFields] = useState([]);
  const [formData, setFormData] = useState({});

  useEffect(() => {
    const storedFields = localStorage.getItem('formFields');
    const storedData = localStorage.getItem('formData');
    if (storedFields) setFields(JSON.parse(storedFields));
    if (storedData) setFormData(JSON.parse(storedData));
  }, []);

  useEffect(() => {
    localStorage.setItem('formFields', JSON.stringify(fields));
  }, [fields]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  return (
    <FormContext.Provider value={{ fields, setFields, formData, setFormData }}>
      {children}
    </FormContext.Provider>
  );
};
