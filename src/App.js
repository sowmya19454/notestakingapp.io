import React, { useState } from 'react'
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';

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
const[searchText , setSearchText] = useState('');

const addNote = (text) =>{
  const date = new Date();
  const newNote ={
    id: nanoid(),
    text: text,
    date: date.toLocaleDateString()
  }
  const newNotes = [...notes,newNote];
  setNotes(newNotes);
}
const deleteNote = (id) => {
  
 const newNotes = notes.filter((note)=>note.id!==id);
 setNotes(newNotes);
}
  return (
    <div className='container'>
      <h1>Notes</h1>
      <Search handleSearchNote = {setSearchText}/>
      <NotesList 
      notes={notes.filter((note)=>
        note.text.toLowerCase().includes(searchText))}
       handleAddNote={addNote}
       handleDeleteNote = {deleteNote}/>
            
      </div>
  )
}

export default App;