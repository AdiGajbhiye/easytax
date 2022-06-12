import React from 'react';
import Dropdown from '@ui-kit/Dropdown';
import { Controller, useForm } from 'react-hook-form';
import TextField from '@ui-kit/TextField';
import { IWallet, WalletValidation } from '@easytax/validator';
import { zodResolver } from '@hookform/resolvers/zod';
import { postRequest } from '@service/http';
import { useMutation } from 'react-query';

function AddWallet() {
  const mutation = useMutation<any, any, IWallet>(async (data) => {
    const response = postRequest('wallet/add', data);
    console.log(response);
  });

  const {
    control,
    watch,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IWallet>({ resolver: zodResolver(WalletValidation) });

  return (
    <div className="flex flex-col justify-center">
      <form onSubmit={handleSubmit((data) => mutation.mutate(data))} className="flex flex-col items-center">
        <Controller
          name="walletType"
          control={control}
          render={({ field: { onChange, value } }) => (
            <Dropdown
              onChange={onChange}
              label="Wallet"
              placeholder="Select wallet"
              options={[
                { text: 'Exchange', value: 'exchange' },
                { text: 'Wallet', value: 'wallet' },
              ]}
              error={errors?.walletType}
              value={value}
            />
          )}
        />

        <TextField label="Public address" formProps={register('publicAddress')} error={errors?.publicAddress} />
        {watch('walletType') === 'wallet' && (
          <TextField label="Secret" formProps={register('secret')} error={errors?.secret} />
        )}
        <input type="submit" className="bg-blue-400 rounded py-2 mt-8 w-full" />
      </form>
    </div>
  );
}

export default AddWallet;
