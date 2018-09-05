const channelFormValidate = values => {
  const errors = {};
  const requiredFields = [
    'title',
    'description',
    'detailedText',
    'price',
    'perUnit',
  ];

  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'This field is required!';
    }

    if (field === 'price' && values[field] < 0) {
      errors[field] = "Price can't be negative!";
    }

    if (field === 'perUnit' && values[field] < 0) {
      errors[field] = "Unit value can't be negative!";
    }
  });

  return errors;
};

export default channelFormValidate;
