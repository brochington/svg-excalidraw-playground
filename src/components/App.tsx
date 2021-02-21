import React from 'react';

import Excalidraw from './Excalidraw';
import Monaco from './Monaco';

const App: React.FC = () => {
  return (
    <div>
      <Monaco />
      <Excalidraw />;
    </div>
  );
};

export default App;
