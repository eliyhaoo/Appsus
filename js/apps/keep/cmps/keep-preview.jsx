import { NoteImg } from './note-img.jsx'
import { NoteTodos } from './note-todos.jsx'
import { NoteTxt } from './note-txt.jsx'
import { DynamicCmp } from './dynamic-note-adder.jsx'
import { eventBusService } from '../../../services/event-bus-service.js'
export class KeepPreview extends React.Component {
        state = {
                note: null
        }

        componentDidMount() {
                this.setState({ note: this.props.note })
        }
        
        

        render() {
                const { note } = this.state
                if (!note) return <React.Fragment></React.Fragment>
                
                return <section className={`keep-preview flex ${note.type}`} >
                        <button className="delete-btn" onClick={()=>{eventBusService.emit('trash', note.id)}}  >X</button>
                        {note.type === 'note-txt' && <NoteTxt note={note} />}
                        {note.type === 'note-img' && <NoteImg note={note} />}
                        {note.type === 'note-todos' && <NoteTodos note={note} />}
                </section>
        }
}
