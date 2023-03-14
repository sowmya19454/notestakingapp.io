import Note from "./Note";
import AddNote from "./AddNote";
const NotesList = ({ notes }) => {
    return(
        <div className='notes-List'>
            <AddNote />
            {notes.map((note)=> (
                <Note id = {note.id} text = {note.text} date = {note.date}/>
            ))}
            
        </div>
    )
};
export default NotesList;