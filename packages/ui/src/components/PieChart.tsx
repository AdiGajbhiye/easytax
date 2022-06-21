import VegaContainer from './VegaContainer';

interface IProps {
  values: { category: string | number; value: number }[];
}
export default function PieChart({ values }: IProps) {
  return (
    <VegaContainer
      spec={{
        data: { values },
        mark: 'arc',
        encoding: {
          theta: { field: 'value', type: 'quantitative' },
          color: { field: 'category', type: 'nominal' },
        },
      }}
    />
  );
}
