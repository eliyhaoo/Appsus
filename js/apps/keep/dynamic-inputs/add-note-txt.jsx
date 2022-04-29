

export function AddNoteTxt({note, handleChange, keyName}){
    
        const {txt} = note.txt.info
        
        return <section className="add-note-txt" >
        <input type="text" name={keyName} placeholder="Take a note..." value={txt} onChange={()=>handleChange} />
    </section>
    
}