export const validateEmail = (email) => {
  /* eslint-disable */
  return email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
};

export const validatePhone = (phone) => {
  /* eslint-disable */
  return phone.match(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/);
};

export const validatePassword = (password) => {
  /* eslint-disable */
  return password.match(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
  );
};
