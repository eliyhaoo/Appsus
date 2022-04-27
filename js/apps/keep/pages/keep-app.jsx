import { KeepFilter } from "../cmps/keep-filter.jsx"
import { KeepList } from "../cmps/keep-list.jsx"
import { keepService } from "../services/keep.service.js"

export class KeepApp extends React.Component {

    state = {
        notes: [],
        filterBy: null
    }

    componentDidMount() {
        this.loadNotes()
    }

    loadNotes = () => {
        keepService.query()
            .then(notes => {
                this.setState({ notes })
            })
    }

    get notesToDisplay() {
        const {notes} = this.state
        const urlSrcPrm = new URLSearchParams(this.props.location.search)

        const type = urlSrcPrm.get('type')

        if(!type) return notes
        return notes.filter(note=> note.type === type)

    }

    render() {
        return <section className="keep-app flex">

            <KeepFilter />
            <KeepList notes={this.notesToDisplay} />
        </section>
    }
}