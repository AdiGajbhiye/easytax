import Header from './Header';
import Row from './Row';

interface IProps {
  data: string[][];
  header: string[];
}

export default function Table({ header, data }: IProps) {
  return (
    <div className="shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <Header header={header} />
        <tbody>
          {data.map((row, i) => (
            <Row key={i} row={row} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
