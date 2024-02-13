import React, { useState } from 'react';
import NoteContext from './NoteContext';

const NoteState = (props) => {
  const state = {
    name: ' john',
    age: '19',
    class: '5th',
  };
  const [data, setdata] = useState(state);
  const update = () => {
    setTimeout(() => {
      setdata({ name: ' leo', age: '77', class: '11th' });
    }, 1000);
  };

  return (
    <NoteContext.Provider value={{ data, update }}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
