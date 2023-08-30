import { LockClosedIcon } from '@heroicons/react/24/solid'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axiosClient from './axios.js';

const Signup = () => {
  const [fullName,setFullName]=useState('');
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const [passwordConfirmation,setPasswordConfirmation]=useState('');
  const [error,setError]=useState({__html:''});

  const onSubmit= (ev) => {
    console.log(ev)
    ev.preventDefault();
    setError({__html:''});

    const options = {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
    };

    axiosClient
    .post('/signup',{
      name:fullName,
      email:email,
      password:password,
      password_confirmation:passwordConfirmation
    },
    options)
    .then(({data}) => {
      console.log(data)
    })
    .catch((error)=>{
      console.log(error)
      // if(error.response){
      //   //console.log(error.response.data.errors) 
      //   const errorsArr=Object.values(error.response.data.errors).reduce(
      //     (accum,next) => [...accum,...next],[]  
      //   )
      //   console.log(errorsArr)
      //   setError({__html:errorsArr.join('<br />')})
      // }
      // console.error(error)
    })
  }
  

    return (  
      <>
          <div onSubmit={onSubmit} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">              
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium leading-6 text-gray-900">
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="full-name"
                    name="full-name"
                    type="text"
                    placeholder="full name"
                    required
                    value={fullName}
                    onChange={ ev => setFullName(ev.target.value)}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="email"
                    required
                    value={email}
                    onChange={ ev => setEmail(ev.target.value)}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="password"
                    required
                    value={password}
                    onChange={ ev => setPassword(ev.target.value)}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password-confirmation" className="block text-sm font-medium leading-6 text-gray-900">
                    Repeat Your Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password-confirmation"
                    name="password_confirmation"
                    type="password"
                    placeholder="Repeat Your Password"
                    required
                    value={passwordConfirmation}
                    onChange={ ev => setPasswordConfirmation(ev.target.value)}
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-orange-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    <LockClosedIcon className="h-5 w-5"/>
                  Sign Up Now
                </button>
              </div>
            </form>

            {error.__html && (
              <div 
                className='bg-red-500 rounded my-5 px-3 py-1.5 text-white'
                dangerouslySetInnerHTML={error}
              >
              </div>
            )}
  
            <p className="mt-10 text-center text-sm text-gray-500">
              Already have a account{' '}
              <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                login here
              </Link>
            </p>
          </div>
      </>
    );
}
 
export default Signup; 