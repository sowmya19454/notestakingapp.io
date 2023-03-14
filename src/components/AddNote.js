const AddNote = ()=>{
    return (
        <div className="note new">
            <textarea rows="8" cols ="10" placeholder="type to add a note" />
            <div className="note-footer">
                <button className="save">Save</button>
            </div>
        </div>
    )
}
export default AddNote;