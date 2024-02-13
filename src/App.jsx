// App.jsx
import { useContext, useEffect } from 'react';
import NoteContext from './context/Note/NoteContext';

function App() {
  const contextValue = useContext(NoteContext);
  useEffect(() => {
    contextValue.update();
  }, []);

  return (
    <>
      <h1>Hello React {contextValue.data.name}</h1>
      <p> {contextValue.data.class}</p>
    </>
  );
}

export default App;
