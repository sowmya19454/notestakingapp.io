
import { MdDeleteForever } from 'react-icons/md';
const Note = () =>{
    return <div className='note'>
        <span>Hello This is 1st note</span>
        <div className="note-footer">
            <small>14/04/2023</small>
            <MdDeleteForever className='delete-icon' size="1.3cm" />
        </div>
    </div>;
};
export default Note;