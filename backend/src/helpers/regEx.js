/**
* @description check valid name
*/
const validName = /^[a-zA-z]{2,20}$/;

const validFullName = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

/**
* @description check valid phone number
*/
const validPhoneNumber = /^[0-9]{11}$/;

/**
 * @description check valid email
*/
const validEmail = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;

module.exports = { validName, validFullName, validEmail, validPhoneNumber };
