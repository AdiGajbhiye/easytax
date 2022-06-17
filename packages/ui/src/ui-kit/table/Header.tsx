export default function Header({ header }: { header: string[] }) {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      <tr>
        {header.map((h) => (
          <th key={h} scope="col" className="px-6 py-3">
            {h}
          </th>
        ))}
      </tr>
    </thead>
  );
}
