import {useEffect, useState} from 'react';

export default function Inventory() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch('http://3.239.239.146:5000/inventory')
      .then(r => r.json())
      .then(setItems);
  }, []);
  return (
    <div style={{padding:24}}>
      <h1>Inventory</h1>
      <ul>{items.map(i => <li key={i.id}>{i.name}</li>)}</ul>
    </div>
  );
}