
export class AddNoteTxt extends React.Component {

    state = {
        note: {
            txt: '',
        }
    }

    handleTxtChange = ({ target }) => {
        const value = target.value

        this.setState((prevState) => ({ ...prevState.note, note: { txt: value } }))
    }
    reset = () => {
        this.setState({ note: { txt: '' } })
    }
    render() {
        const { txt } = this.state.note
        const { note } = this.state
        const { type } = this.props
        // if(!txt) return <React.Fragment></React.Fragment>
        return <section className="note-adder  add-note-txt" >
            <input type="text" placeholder="Take a note..." value={txt} onChange={this.handleTxtChange} />
            <button className="add-btn" onClick={() => {
                this.props.add(type, note)
                this.reset()
            }} ></button>
        </section>

    }

}