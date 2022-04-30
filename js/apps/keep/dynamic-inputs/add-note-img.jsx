

export function AddNoteImg({add}){
    return <section className="add-note-img">
        <input type="text" placeholder="Add your image URL..." />
        <button onClick={()=>{add()}} ></button>
    </section>
}