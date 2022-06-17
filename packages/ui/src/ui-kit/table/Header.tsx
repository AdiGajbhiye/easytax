export default function Header({ header }: { header: string[] }) {
  return (
    <thead>
      <tr>
        {header.map((h) => (
          <th key={h}>{h}</th>
        ))}
      </tr>
    </thead>
  );
}
