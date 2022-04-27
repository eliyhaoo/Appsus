import {NoteTxt} from './note-txt.jsx'

export function KeepPreview({note}){
        return <section className="keep-preview">
                <NoteTxt note={note}/>
        </section>
}