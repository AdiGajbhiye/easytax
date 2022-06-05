import React from 'react';
import Dropdown from '@ui-kit/Dropdown';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@ui-kit/TextField';

function AddWallet() {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit((data) => console.log(data))} className="flex flex-col items-center">
        <Controller
          name="wallet"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              onChange={onChange}
              label="Wallet"
              placeholder="Select wallet"
              options={[
                { text: 'Binance', value: 'binance' },
                { text: 'Bitforex', value: 'bitforex' },
                { text: 'FTX', value: 'ftx' },
              ]}
              error={errors?.wallet}
              value={value}
            />
          )}
        />

        <TextField label="Public address" formProps={register('publicAddress')} error={errors?.publicAddress} />
        <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
      </form>
    </div>
  );
}

export default AddWallet;
