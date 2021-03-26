
export let required = (propertyType) => {
  if (propertyType.length < 1) {
    return `You must provide a ${propertyType}`
  }
  
}

export let minLength = (propertyType, minLength) => {
  if (propertyType.length >= minLength) {
    return `${propertyType} must be at least ${minLength} characters`
  }
  
}

export let maxLength = (propertyType, maxLength) => {
  if (propertyType.length <= maxLength) {
    return `${propertyType} must be less than ${maxLength} characters`
  }
  
}

export let emailFormat = (email) => {
  let regex = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,24})+$/
  if (regex.test(email) !== true) {
    return "Please provide a valid email address"
  } 
  
}
export let alphaNum = (username) => {
  let regex = /^[a-zA-Z0-9\d_]*$/
  if (regex.test(username) !== true) {
    return "Please provide a valid username"
  } 
}

export default {
  required,
  minLength,
  maxLength,
  emailFormat
}

The username field must be at least 4 characters
The username field may contain alpha-numeric characters as well as dashes and underscores
The username field is required