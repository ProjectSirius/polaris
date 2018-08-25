const channelFormValidate = values => {
  const errors = {};
  const requiredFields = [
    'title',
    'description',
    'detailedText',
    'price',
    'count',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = `${field.charAt(0).toUpperCase() +
        field.slice(1)} is required!`;
    }

    if (field === 'price' && values[field] < 0) {
      errors[field] = "Price can't be negative!";
    }

    if (field === 'count' && values[field] < 0) {
      errors[field] = "Unit value can't be negative!";
    }
  });

  return errors;
};

export default channelFormValidate;
