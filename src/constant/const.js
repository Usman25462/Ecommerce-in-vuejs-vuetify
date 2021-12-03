//Validation Of Input fields
const firstNameRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 3 || 'Max 20 characters',
  (value) => {
    const pattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    return pattern.test(value) || 'Invalid Fullname.'
  },
]
const lastNameRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 3 || 'Max 20 characters',
  (value) => {
    const pattern = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/
    return pattern.test(value) || 'Invalid Fullname.'
  },
]
const emailRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length <= 50 || 'Max 50 characters',
  (value) => {
    const pattern =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return pattern.test(value) || 'Invalid e-mail.'
  },
]

const userNameRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 5 || 'Max 5 characters',
  (value) => {
    const pattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    return pattern.test(value) || 'Invalid Username.'
  },
]
const passwordRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 8 || 'Max 8 Digits',
  (value) => {
    const pattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    return pattern.test(value) || 'Invalid password.'
  },
]
const numberRules = [
  (value) => !!value || 'Required.',
  (value) => (value || '').length >= 8 || 'Max 8 Digits',
  (value) => {
    const pattern = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/
    return pattern.test(value) || 'Invalid password.'
  },
]
const checkboxRules = [(value) => !!value || 'You must agree to continue!']

export { 
  firstNameRules,
  lastNameRules,
  passwordRules, 
  userNameRules, 
  emailRules,  
  numberRules,
  checkboxRules }
