import React, { useState, useEffect } from 'react'
// import formSchema from '../validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'

function Form(props) {
    const {
        checkboxChange, 
        inputChange, 
        submit, 
        values, 
        disabled, 
        errors,
    } = props
//don't forget to add errors

const onSubmit = evt => {
    evt.preventDefault()
    submit(); // to add
}

const onCheckboxChange = evt => {
    const { name, checked } = evt.target
    checkboxChange(name, checked) // need to add to prop
}

const onInputChange = evt => {
    const { name, value } = evt.target
    inputChange(name, value) // need to add to prop
}

return(
    <form onSubmit={onSubmit}>
        <div>
            <div>
                <label>Name
                    <input
                    value={values.name}
                    onChange={onInputChange}
                    name='name'
                    type='text'
                    />
                </label>
            </div>

            <div>
                <label>Email
                    <input
                    value={values.email}
                    onChange={onInputChange}
                    name='email'
                    type='email'
                    />
                </label>
            </div>

            <div>
                <label>Password
                    <input
                        value={values.password}
                        onChange={onInputChange}
                        name='password'
                        type='password'
                        />
                </label>
            </div>

            <div>
                <label>Terms of Service
                    <input
                        checked={values.termsOfService}
                        onChange={onCheckboxChange}
                        name='termsOfService'
                        type='checkbox'
                        />
                </label>
            </div>

            <div>
                <label>Role
                    <select
                    onChange={onInputChange}
                    value={values.role}
                    name="role"
                    >
                        <option value=''>- Select an option -</option>
                        <option value="engineer">Engineer</option>
                        <option value="productManager">Product Manager</option>
                        <option value="uiDesigner">UI Designer</option>
                    </select>
                </label>
            </div>

            <div>
                <button disabled={disabled}>Submit</button> 
            </div>
        </div>
    </form>
)

}

export default Form;