export default function Row({ row }: { row: string[] }) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      {row.map((i) => (
        <td key={i} className="px-6 py-4">
          {i}
        </td>
      ))}
    </tr>
  );
}
