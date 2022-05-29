import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@ui-kit/TextField';
import { ILogin, LoginValidation } from '@easytax/validator';
import { useMutation } from 'react-query';
import { postRequest } from '@service/http';
import { Link } from 'react-router-dom';

function Login() {
  const mutation = useMutation<any, any, ILogin>(postRequest('auth/login'));

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILogin>({ resolver: zodResolver(LoginValidation) });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-2xl">Login</div>
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col items-center">
          <TextField name="email" label="Email" formProps={register('email')} error={errors?.email} />
          <TextField name="password" label="Password" formProps={register('password')} error={errors?.password} />
          <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
        </form>
        <Link to="/signup">Not registered. Signup</Link>
      </div>
    </div>
  );
}

export default Login;
