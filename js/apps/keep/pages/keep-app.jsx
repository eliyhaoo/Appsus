import { KeepFilter } from "../cmps/keep-filter.jsx"
import { KeepList } from "../cmps/keep-list.jsx"
import { keepService } from "../services/keep.service.js"
import { eventBusService } from '../../../services/event-bus-service.js'
import { AddNote} from '../cmps/add-note.jsx'
export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: null
    }
    removeDeleteEvent;
    // removeAddEvent;
    componentDidMount() {
        this.loadNotes()
        this.removeDeleteEvent = eventBusService.on('delete', (noteId) => { this.onRemove(noteId) })
        // this.removeAddEvent = eventBusService.on('add', (note) => { this.onAddNote(note) })

    }

    onRemove = (noteId) => {
        keepService.remove(noteId)
            .then(this.loadNotes)
    }

    onAddNote = ( note) => {
        console.log('note in onaddnote', note);
        // console.log('this the log we need', ev);
        // ev.preventDefault()
        keepService.add(note)
            .then(this.loadNotes)
    }

    loadNotes = () => {
        keepService.query()
            .then(notes => this.setState({ notes }))
    }


    componentWillUnmount() {
        this.removeDeleteEvent()
        // this.removeAddEvent()
    }
    get notesToDisplay() {
        const { notes } = this.state
        const urlSrcPrm = new URLSearchParams(this.props.location.search)

        const type = urlSrcPrm.get('type')

        if (!type) return notes
        return notes.filter(note => note.type === type)

    }

    render() {
        if (!this.notesToDisplay) return <React.Fragment></React.Fragment>
        return <section className="keep-app flex column">
            <AddNote add={this.onAddNote} />
         
         
            <KeepList notes={this.state.notes} />
           
        </section>
    }
}