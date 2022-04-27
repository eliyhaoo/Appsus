import {KeepPreview} from './keep-preview.jsx'

export function KeepList({notes}){

        return <section className="keep-list">
            {notes.map(note=> <KeepPreview note={note} key={note.id}/>)}
        </section>
    
}