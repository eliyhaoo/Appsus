

export class AddNoteImg extends React.Component {
    state = {
        note: {
            title: '',
            url: ''

        }
    }

    handleImgChange = ({ target }) => {
        const value = target.value
        const field = target.name
        this.setState((prevState) => ({ ...prevState.note, note: { [field]: value } }))
    }
    
    reset = () =>{
        this.setState({note:{title:''}})
        this.setState({note:{url:''}})
    }
    
    render() {
        const { url } = this.state.note
        const { note } = this.state
        const { type } = this.props
        
        return <section className="note-adder add-note-img" >
      
            <input type="text" placeholder="Enter image URL" name="url" value={url} onChange={this.handleImgChange} />
            <button className="add-btn" onClick={() => { 
                this.props.add(type, note)
                this.reset()
                 }} ></button>
        </section>
    }
}