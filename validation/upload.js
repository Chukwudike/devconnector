const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateImage(data) {
  let errors = {};

  //data.avatar = !isEmpty(data.avatar) ? data.avatar : "";

  // if (!Validator.isEmpty(data.avatar)) {
  //   errors.empty = "No file was selected";
  // }

  for (let key in data) {
    if (data.hasOwnProperty) {
      return false;
    } else{
      return errors.empty = "No file was selected";
    }
   
  }
  

  return {
    errors,
    isValid: isEmpty(errors)
  };


};


