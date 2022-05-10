import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@ui-kit/TextField';
import z from 'zod';

interface LoginForm {
  email: string;
  password: string;
}

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(20),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<LoginForm> = (data) => console.log(data);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-2xl">Login</div>
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
          <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
        </form>
      </div>
    </div>
  );
}

export default Login;
