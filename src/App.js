
import React from 'react';
import './App.css';
//import Content from './componets/Content';
const ContentComponent = React.lazy(() => import('./componets/Content'));

function App() {
  return (
    <div className="App">
     <ContentComponent/>
    </div>
  );
}

export default App;
