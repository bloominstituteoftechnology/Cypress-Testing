import React, { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './Form.css';

const  Formup = props => {
    const [nusr,setNusr] = useState({});
    const  {name}  = props;
        
    
    const hC = (e) =>{
        console.log('Changes');
    }
  return (
    
    <pre id={name} className="RegisterU" onChange={hC}><h1>Now Logged In</h1>Hi {name}</pre>
  
    );
}

export default Formup;