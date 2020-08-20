import * as yup from 'yup'

const schema = yup.object().shape({
  name: yup
    .string()
    .required('Must include your name'),
  email: yup
    .string()
    .min(5, 'Email must be at least 5 characters long')
    .required('Email is required'),
  password: yup
    .string()
    .min(5, 'Password must be at least 5 characters')
    .required('Password is required'),
  termsOfService: yup
    .boolean() 
    .oneOf([true], 'Must Accept Terms & Conditions'),
  role: yup
    .string()
    .oneOf(['engineer', 'productManager', 'uiDesigner'], 'Must choose a role')
})

export default schema
