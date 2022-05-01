import { KeepPreview } from './keep-preview.jsx'

export function KeepList({ notes, save, remove }) {

    return  <section className="keep-list">  
                {notes.map(note => <KeepPreview remove={remove} save={save} note={note} key={note.id} />)}
        </section>
}