import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import TextField from '@ui-kit/TextField';

interface LoginForm {
  email: string;
  password: string;
  confirmPassword: string;
}

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-2xl">Signup</div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
          <TextField
            name="email"
            label="Email"
            formProps={register('email', { required: true })}
            error={errors?.email}
          />
          <TextField
            name="password"
            label="Password"
            formProps={register('password', { required: true, minLength: 8, maxLength: 20 })}
            error={errors?.password}
          />
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            formProps={register('confirmPassword', { required: true, minLength: 8, maxLength: 20 })}
            error={errors?.confirmPassword}
          />
          <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
