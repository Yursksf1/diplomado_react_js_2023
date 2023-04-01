import React, { useState } from 'react';

function Branch({ name, children }) {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <button onClick={handleExpandClick}>
        {expanded ? '-' : '+'} {name}
      </button>
      {expanded && (
        <ul>
          {children.map((child) => (
            <li key={child.name}>
              {child.children ? (
                <Branch name={child.name} children={child.children} />
              ) : (
                <span>{child.name}</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Tree({ data }) {
  return (
    <ul>
      {data.map((branch) => (
        <li key={branch.name}>
          <Branch name={branch.name} children={branch.children} />
        </li>
      ))}
    </ul>
  );
}

export default Tree;