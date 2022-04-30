import { AddNote } from './add-note.jsx'
import { KeepPreview } from './keep-preview.jsx'


export function KeepList({ notes, save }) {


    return  <section className="keep-list">
                {/* <AddNote /> */}
                {/* <div className="previews-container "> */}
                {notes.map(note => <KeepPreview save={save} note={note} key={note.id} />)}
                {/* </div> */}
            
        </section>
    

}