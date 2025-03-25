export default function Home() {
  const inventory = [
    { id: 1, name: "Book A" },
    { id: 2, name: "Book B" },
    { id: 3, name: "Book C" },
  ];

  return (
    <div style={{ padding: 24 }}>
      <h1>Inventory</h1>
      <ul>
        {inventory.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}