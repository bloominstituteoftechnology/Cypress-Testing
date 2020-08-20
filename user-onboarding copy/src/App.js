import React, { useState, useEffect } from 'react'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/schema'
import Form from './Form'
import User from './User'
import styled from 'styled-components'

const StyledDiv = styled.div`
  text-align: ${props => props.theme.textAlign};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.color}
`

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  termsOfService: false,
  role: {
    engineer: false,
    productManager: false,
    uiDesigner: false,
  } 
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: '',
  role: '',
  } 

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const getUsers = () => {
    axios.get('https://reqres.in/api/users')
      .then(res => {
        debugger
        let arr = res.data.data
        setUsers([...users, ...arr])
      })
      .catch(err => {
        debugger
        console.log(err, 'error!')
      })
  }

  const postUsers = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(res => {
        debugger
        setUsers([...users, res.data])
        console.log(users)
      })
      .catch(err => {
        console.log(err, 'error')
      })
      .finally(() => {
        setFormValues(initialFormValues)
      })
  }

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(success => {
        setFormErrors({
          ...formErrors,
          [name]: "",
          })
        })
      .catch(err => {
        setFormErrors({
          ...formErrors, 
          [name]: err.errors[0],
        })
      })

    setFormValues({
      ...formValues,
      [name]: value,
    })
  }

  const checkboxChange = (name, checked) => {
    setFormValues({
      ...formValues,
      [name]: checked,
    })
  }

  const submit = evt => {
    debugger
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      termsOfService: formValues.termsOfService,
      role: formValues.role,
    }

    console.log(newUser)
    
    postUsers(newUser);
  }

  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid);
      })
  }, [formValues])

  return (
    <StyledDiv>
      <header className="App-header"><h1>User Onboarding</h1>
      <Form 
      checkboxChange={checkboxChange}
      inputChange={inputChange}
      submit={submit}
      values={formValues}
      disabled={disabled}
      errors={formErrors}
      /> 

      {
        users.map(x => {
          return (
          <User key={x.name} user={x}/>
          )
        })
      }

      </header>
    </StyledDiv>
  );
}

export default App;