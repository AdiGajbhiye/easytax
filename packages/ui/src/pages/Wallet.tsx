import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { getRequest } from '@service/http';
import Table from '@ui-kit/table';
import { useQuery } from 'react-query';

dayjs.extend(relativeTime);

function Wallet() {
  const { isLoading, isError, data, error } = useQuery('listWallets', () => getRequest('wallet/list'));
  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>{String(error)}</div>;
  const header = ['Wallet type', 'Public address', 'Created at'];
  const tableData = data.wallets.map(({ walletType, publicAddress, createdAt }) => [
    walletType,
    publicAddress,
    dayjs(createdAt).fromNow(),
  ]);
  return (
    <div className="m-4">
      <Table header={header} data={tableData} />
    </div>
  );
}

export default Wallet;
