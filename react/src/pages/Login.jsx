import { LockClosedIcon } from '@heroicons/react/24/solid'
import axiosClient from './axios.js';
import { useState } from 'react';
import { UserStateContext } from '../store/ContextProvider.jsx';



const Login = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');

  const [error,setError]=useState({__html:''});
  const {setUserToken,setCurrentUser}=UserStateContext();


  const onSubmit= (ev) => {
    ev.preventDefault();
    setError({__html:''});

    axiosClient
    .post('/login',{
      email:email,
      password:password,
    })
    .then(({data}) => {
      console.log(data)
      setCurrentUser(data.user);
      setUserToken(data.token);
    })
    .catch((error)=>{
      console.log(error)
      if(error.response){
        const errorsArr=Object.values(error.response.data.errors).reduce(
          (accum,next) => [...accum,...next],[]  
        )
        console.log(errorsArr)
        setError({__html:errorsArr.join('<br />')})
      }
      console.error(error)
    })
  }

    return (  
      <>
        <div onSubmit={onSubmit} className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={ ev => setEmail(ev.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={ ev => setPassword(ev.target.value)}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    <LockClosedIcon className="h-5 w-5"/>
                  Sign in
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

        </div>
      </>
    );
}
 
export default Login;