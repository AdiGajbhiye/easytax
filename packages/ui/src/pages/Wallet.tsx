import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getRequest } from '@service/http';
import Table from '@ui-kit/table';
import { useQuery } from 'react-query';
import Loader from '@components/Loader';

dayjs.extend(relativeTime);

function Wallet() {
  const { isLoading, isError, data, error } = useQuery('getWallet', () => getRequest('wallet'));
  if (isLoading)
    return (
      <div className="h-full">
        <Loader />
      </div>
    );
  if (isError) return <div>{String(error)}</div>;
  const header = ['Wallet type', 'Wallet total', 'Created at'];
  const tableData = data.wallets.map(({ walletType, walletTotal, createdAt }) => [
    walletType,
    walletTotal,
    dayjs(createdAt).fromNow(),
  ]);
  return (
    <div className="m-4">
      <Table header={header} data={tableData} />
    </div>
  );
}

export default Wallet;
