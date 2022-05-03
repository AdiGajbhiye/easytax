import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="email">
          Email
          <input {...register('email', { required: true })} />
        </label>
        <label htmlFor="password">
          Email
          <input {...register('password', { required: true })} />
        </label>
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
