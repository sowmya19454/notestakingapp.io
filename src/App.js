import React, { useState } from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';

export const App = () => {
  const [notes,setNotes] = useState([{
    id: nanoid(),
    text: "This is my first note",
    date: "15/04/2023",
  },
  {
    id: nanoid(),
    text: "This is my 2nd note",
    date: "16/04/2023",
  },
  {
    id: nanoid(),
    text: "This is my 3rd note",
    date: "17/04/2023",
  },
  {
    id: nanoid(),
    text: "This is my 4rd note",
    date: "18/04/2023",
  },
]);
  return (
    <div className='container'>
      <h1>Notes</h1>
      <NotesList notes={notes}/>
      
      </div>
  )
}

export default App;