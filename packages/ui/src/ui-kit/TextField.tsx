import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface IProps {
  name: string;
  label: string;
  formProps: UseFormRegisterReturn;
  error: FieldError | undefined;
}

function TextField({ name, label, formProps, error }: IProps) {
  return (
    <div>
      <label htmlFor={name}>
        {label}
        <input {...formProps} />
      </label>
      {error && <div>error</div>}
    </div>
  );
}

export default TextField;
