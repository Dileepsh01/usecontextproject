import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import NoteState from './context/Note/NoteState.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <NoteState>
    <App />
  </NoteState>
);
