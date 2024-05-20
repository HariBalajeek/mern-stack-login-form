import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home1 from './components/Home';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home1/>
    </>
  );
}

export default App;
