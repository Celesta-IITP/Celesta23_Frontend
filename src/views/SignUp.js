import React, { useState } from 'react';
import '../App.css';
import { Button } from '../components/Button/Button';
import '../assets/form.css'


export default function SignUp() {

  
  return (
    <>
      <div>        
        <h2 className='main-header'>Register</h2>
        <form className='register'>
        <input
              className='input name-input'
              name='fname'
              type='text'
              placeholder='Full Name'
            />
        <input
              className='input name-input'
              name='email'
              type='email'
              placeholder='Email'
            />
        <input
              className='input name-input'
              name='pass'
              type='password'
              placeholder='Password'
            />
        <input
              className='input name-input'
              name='dob'
              type='date'
              placeholder='Date of birth'
            />
        <input
              className='input name-input'
              name='id'
              type='text'
              placeholder='CA Referal ID(if any)'
            />
        <input
              className='input name-input'
              name='college'
              type='text'
              placeholder='College'
            />
        <input
              className='input name-input'
              name='phone'
              type='tel'
              placeholder='Phone No.'
              pattern='[0-9]{10}'
            />
        <select className='input drop-down'>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="others">Others</option>
        </select>
            <Button buttonStyle='btn--outline' location='/sign-up'>Subscribe</Button>
        </form>
      </div>
    </>
  );
}