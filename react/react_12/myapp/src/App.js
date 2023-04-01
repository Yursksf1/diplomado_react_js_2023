import React from 'react';
import Tree from './components/Tree';

const data = [
  {
    name: 'Rama 1',
    children: [
      { name: 'Rama 1.1' },
      { name: 'Rama 1.2', children: 
        [ { name: 'Rama 1.2.1' }, 
          { name: 'Rama 1.2.2' }] 
      },
    ],
  },
  { name: 'Rama 2', children: [] },
];

function App() {
  return (
    <div>
      <Tree data={data} />
    </div>
  );
}

export default App;