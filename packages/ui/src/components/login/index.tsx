import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '../../ui-kit/TextField';

interface LoginForm {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField name="email" label="Email" formProps={register('email', { required: true })} error={errors?.email} />
        <TextField
          name="password"
          label="Password"
          formProps={register('password', { required: true, minLength: 8, maxLength: 20 })}
          error={errors?.password}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default Login;
