import React from 'react';
import PieChart from '@components/PieChart';
import { useQuery } from 'react-query';
import { getRequest } from '@service/http';
import Loader from '@components/Loader';

function Portfolio() {
  const { isLoading, isError, data, error } = useQuery('getWallet', () => getRequest('wallet'));
  if (isLoading)
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  if (isError) return <div>{String(error)}</div>;
  const coinsDistribution = {};
  data.wallets.forEach(({ balance }) => {
    balance.forEach(({ symbol, price }) => {
      if (!coinsDistribution[symbol]) {
        coinsDistribution[symbol] = 0;
      }
      coinsDistribution[symbol] += price;
    });
  });

  return (
    <div>
      Portfolio
      <PieChart values={Object.entries(coinsDistribution).map(([k, v]) => ({ category: k, value: v }))} />
    </div>
  );
}

export default Portfolio;
