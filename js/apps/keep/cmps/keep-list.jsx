import { AddNote } from './add-note.jsx'
import { KeepPreview } from './keep-preview.jsx'


export function KeepList({ notes }) {


    return  <section className="keep-list">
                {/* <AddNote /> */}
                <div className="previews-container grid">
                {notes.map(note => <KeepPreview note={note} key={note.id} />)}
                </div>
            
        </section>
    

}