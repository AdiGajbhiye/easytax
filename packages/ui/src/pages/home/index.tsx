import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@ui-kit/TextField';
import { ILogin, LoginValidation } from '@easytax/validator';
import { useMutation } from 'react-query';
import { postRequest } from '@service/http';

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
        <div className="text-2xl">Home</div>
      </div>
    </div>
  );
}

export default Login;
