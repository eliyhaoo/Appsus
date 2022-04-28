import { KeepFilter } from "../cmps/keep-filter.jsx"
import { KeepList } from "../cmps/keep-list.jsx"
import { keepService } from "../services/keep.service.js"
import { eventBusService } from '../../../services/event-bus-service.js'
export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: null
    }
    removeEvent;

    componentDidMount() {
        this.loadNotes()
        this.removeEvent = eventBusService.on('delete', (noteId) => { this.onRemove(noteId) })

    }

    onRemove = (noteId) => {
        keepService.remove(noteId)
            .then(this.loadNotes)
    }

    loadNotes = () => {
        keepService.query()
            .then(notes => this.setState({ notes }))
    }


    componentWillUnmount() {
        this.removeEvent()
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
        return <section className="keep-app flex">
            
            <KeepFilter />
            <KeepList notes={this.state.notes} />
        </section>
    }
}