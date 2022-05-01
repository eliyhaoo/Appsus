// import { KeepFilter } from "../cmps/keep-filter.jsx"
import { eventBusService } from '../../../services/event-bus-service.js'
import { keepService } from "../services/keep.service.js"

import { KeepList } from "../cmps/keep-list.jsx"
import { AddNote } from '../cmps/add-note.jsx'
export class KeepApp extends React.Component {

    state = {
        notes: [],
        // filterBy: null
    }

    removeDeleteEvent;
    componentDidMount() {
        this.loadNotes()
    }

    onRemove = (noteId) => {
        keepService.remove(noteId)
            .then(this.loadNotes)
            .then(()=> eventBusService.emit('user-msg', 'Note was deleted'))
    
    }

    onSaveNote = (type, note) => {
        keepService.saveNote(type, note)
            .then(this.loadNotes)
            .then(()=>{
                if(!note.id) eventBusService.emit('user-msg', 'Your note was added')
                else eventBusService.emit('user-msg', 'Your note was updated')
            })
    }

    loadNotes = () => {
        keepService.query()
            .then(notes => this.setState({ notes }))
    }


    // componentWillUnmount() {
    //     this.removeDeleteEvent()
    // }

    render() {
        const { notes } = this.state
        if (!notes) return <React.Fragment></React.Fragment>
        return <section className="keep-app flex column">

            <AddNote add={this.onSaveNote} />
            <KeepList save={this.onSaveNote} remove={this.onRemove} notes={notes} />

        </section>
    }
}