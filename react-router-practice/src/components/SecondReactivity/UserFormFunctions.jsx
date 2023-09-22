import { useState, useEffect } from 'react';

export const UserFormFunctions = () => {
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState(true);

  const pattern = /^[^!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?0-9]*$/;

  const inputHandler = (event) => {
    setInput(event.target.value);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsValid(pattern.test(input));
    }, 500);

    return () => {
      clearTimeout(timer);
    }

  }, [input]);

  // Return values and functions that other components can use
  return {
    input,
    isValid,
    inputHandler,
  };
}
