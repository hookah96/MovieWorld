import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pages from './Pages';

function App() {
  return (
    <div className='App'>
      <Router>
        <Route path='/' component={Pages} />
      </Router>
    </div>
  );
}

export default App;
