import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import TextField from '@ui-kit/TextField';
import { ILogin, LoginValidation } from '@easytax/validator';
import { useMutation } from 'react-query';
import { postRequest } from '@service/http';
import { Link, useNavigate } from 'react-router-dom';
import { useMachine } from '@xstate/react';
import { authMachine } from '@service/auth';

function Login() {
  const [state, send] = useMachine(authMachine);
  const navigate = useNavigate();
  const mutation = useMutation<any, any, ILogin>(async (data) => {
    const { token } = await postRequest('auth/login', data);
    console.log('1 -> ', token);
    console.log('2 -> ', state.value);
    send('LOGIN', { token });
    console.log('3 -> ', state.value);
    navigate('/dashboard');
  });

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
          <TextField label="Email" formProps={register('email')} error={errors?.email} />
          <TextField label="Password" type="password" formProps={register('password')} error={errors?.password} />
          <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
        </form>
        <Link to="/signup">Not registered. Signup</Link>
      </div>
    </div>
  );
}

export default Login;
