


export class AddNoteVideo extends React.Component {

    state = {
        note: {
            title: '',
            url: ''

        }
    }


    handleVideoChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ ...prevState.note, note: { [field]: value } }))
    }
    reset = () => {
        this.setState({ note: { url: '' } })
        this.setState({ note: { title: '' } })
    }

    render() {

        // if (!note) return <React.Fragment></React.Fragment>

        const { url } = this.state.note
        const { note } = this.state
        const { type } = this.props
        return <section className="add-note-video">
            {/* //! DONT FORGET TO ADD A DYNAMIC NAME CHANGER TO THE INPUT NAME ATTRIBUTE  */}
            <input type="text" placeholder="Enter video URL" name="url" value={url} onChange={this.handleVideoChange} />
            <button className="add-btn" onClick={() => {
                this.props.add(type, note)
                this.reset()
            }} >add</button>
        </section>
    }
}