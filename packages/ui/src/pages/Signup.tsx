import { useForm } from 'react-hook-form';
import TextField from '@ui-kit/TextField';
import { ISignup, SignupValidation } from '@easytax/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'react-query';
import { postRequest } from '@service/http';
import { Link } from 'react-router-dom';

function Signup() {
  const mutation = useMutation<any, any, ISignup>(async (data) => {
    const response = await postRequest('auth/signup', data);
    console.log(response);
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({ resolver: zodResolver(SignupValidation) });

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center">
        <div className="text-2xl">Signup</div>
        <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col items-center">
          <TextField label="First name" formProps={register('firstName')} error={errors?.firstName} />
          <TextField label="Last name" formProps={register('lastName')} error={errors?.lastName} />
          <TextField label="Email" formProps={register('email')} error={errors?.email} />
          <TextField label="Password" formProps={register('password')} error={errors?.password} />
          <TextField label="Confirm Password" formProps={register('confirmPassword')} error={errors?.confirmPassword} />
          <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
        </form>
        <Link to="/login">Already registered. Login</Link>
      </div>
    </div>
  );
}

export default Signup;
