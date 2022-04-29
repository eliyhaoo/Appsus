


export class AddNoteVideo extends React.Component{ 

    state = {
        note:{
            info:{
                url: ''
            }
        }
    }
    
   
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        
        this.setState((prevState) => ({ note: {...prevState.note, note:{ info: value } } }))
        
    }
    
    render(){
        const {note,keyName} = this.props
        if(!note) return <React.Fragment></React.Fragment>
        const {url} = this.state.note.info
         
        return <section className="add-note-video">
        <input type="text"  name={keyName} value={url} placeholder="Input video URL..." />
    </section>
    }
}