const loginValidate = values => {
  const errors = {};
  const requiredFields = ['username', 'password'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() +
        field.slice(1)} is required!`;
    }

    if (
      field === 'email' &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values[field])
    ) {
      errors[field] = 'Must be a valid email!';
    }

    if (values[field] && field === 'password' && values[field].length < 8) {
      errors[field] = 'Your input must contain at least 8 symbols!';
    }

    if (values[field] && field === 'username' && values[field].length < 6) {
      errors[field] = 'Your input must contain at least 5 symbols!';
    }
  });

  return errors;
};

export default loginValidate;
