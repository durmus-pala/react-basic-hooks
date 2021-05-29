import {useState} from 'react';
import ClassComponent from './ClassComponent';
import FunctionalComponent from './FunctionalComponent';

function App() {
  const [isvisible, setVisible] = useState(true);
  return (
    <div className="App">
      {/* <button onClick={() => setVisible(!isvisible)}>Toggle</button> */}
      {false && <ClassComponent />}
      {isvisible && <FunctionalComponent />}
    </div>
  );
}

export default App;
