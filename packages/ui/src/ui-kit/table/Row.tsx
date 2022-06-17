export default function Row({ row }: { row: string[] }) {
  return (
    <tr>
      {row.map((i) => (
        <td key={i}>{i}</td>
      ))}
    </tr>
  );
}
