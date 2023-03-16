
import { MdDeleteForever } from 'react-icons/md';
const Note = ({id,text,date,handleDeleteNote }) =>{
    return <div className='note'>
        <span>{text}</span>
        <div className="note-footer">
            <small>{date}</small>
            <MdDeleteForever 
            onClick={()=> handleDeleteNote(id)} 
            className='delete-icon' 
            size="1.3cm" />
        </div>
    </div>;
};
export default Note;