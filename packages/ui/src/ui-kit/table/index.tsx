import Header from './Header';
import Row from './Row';

interface IProps {
  data: string[][];
  header: string[];
}

export default function Table({ header, data }: IProps) {
  return (
    <table className="w-full table-auto">
      <Header header={header} />
      <tbody>
        {data.map((row, i) => (
          <Row key={i} row={row} />
        ))}
      </tbody>
    </table>
  );
}
