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

export const validateDOB = (dateSelected, monthSelected, yearSelected) => {
  let date = dateSelected.toString();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let month = (months.indexOf(monthSelected) + 1).toString();

  let year = yearSelected.toString();

  const dateCheck = /^(0?[1-9]|[12][0-9]|3[01])$/;
  const monthCheck = /^([1-9]|1[0-2])$/;
  const yearCheck = /^\d{4}$/;

  if (
    (month.match(monthCheck) &&
      date.match(dateCheck) &&
      year.match(yearCheck)) ||
    console.log(date, month, year)
  ) {
    const ListofDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month == 1 || month > 2) {
      if (date > ListofDays[month - 1]) {
        alert("Invalid date format!");
        return false;
      }
    }

    if (month == 2) {
      let leapYear = false;
      if ((!(year % 4) && year % 100) || !(year % 400)) {
        leapYear = true;
      }

      if (leapYear == false && date >= 29) {
        alert("Invalid date format!");
        return false;
      }

      if (leapYear == true && date > 29) {
        alert("Invalid date format!");
        return false;
      }
    }
    var flag = 1;
  } else {
    return false;
  }
  if (flag == 1) {
    return true;
  }
};
