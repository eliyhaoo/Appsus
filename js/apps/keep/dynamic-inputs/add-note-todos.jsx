

// export function AddNoteTodos({ note, onChange, type }) {

//     return <section className="add-note-todos">
//         <input type="text" placeholder="Add comma separated list" />
//     </section>
// }


export class AddNoteTodos extends React.Component {

    state = {
        note: {
            title: '',
            txt: ''
        }
    }

    handleTodosChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ ...prevState.note, note: { [field]: value } }))
    }
    reset = () => {
        this.setState({ note: { txt: '' } })
        this.setState({ note: { title: '' } })
    }
    render() {
        const { txt } = this.state.note
        const { note } = this.state
        const { type } = this.props
        
        return <section className="add-note-txt" >
            {/* //! DONT FORGET TO ADD A DYNAMIC NAME CHANGER TO THE INPUT NAME ATTRIBUTE  */}
            {/* //TODO Later, add another input for the title. the "list" can be added in a textarea tag */}
            <input type="text" name="txt" placeholder="Enter a comma separated list..." value={txt} onChange={this.handleTodosChange} />
            <button className="add-btn" onClick={() => {
                this.props.add(type, note)
                this.reset()
            }} >add</button>
        </section>
    }

}