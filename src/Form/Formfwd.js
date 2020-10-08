import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './Form.css';
import Formup from './Formup';
const  Formfwd = ({props}) => {
    const [nusr,setNusr] = useState(false);
    const  {name}  = {...props};
   console.log(props);
  return (
    <Formup name={name} />
  );
}

export default Formfwd;