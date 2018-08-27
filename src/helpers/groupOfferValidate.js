const groupOfferValidate = values => {
  const errors = {};
  const requiredFields = ['group_name', 'group_price', 'group_accept_number'];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'This field is required!';
    }

    if (field === 'group_price' && values[field] < 0) {
      errors[field] = "Price can't be negative!";
    }

    if (field === 'group_accept_number' && values[field] < 0) {
      errors[field] = "Can't be negative!";
    }
  });

  return errors;
};

export default groupOfferValidate;
