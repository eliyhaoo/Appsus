import { keepService } from "../services/test"
import { eventBusService } from "../../../services/event-bus-service.js"


export class AddNote extends React.Component{

    state = {
        note: {
            type: 'note-txt',
            createdAt: Date.now(),
            info:{
                txt: ''
            }
        }
    }


    handleChange = ({target})=>{
       const field = target.name
       const value = target.value
       
       this.setState((prevState) => ({note: {...prevState.note, info:{[field]: value}}}))
        
    }


    onSubmit = (ev) =>{
        ev.preventDefault()
        const {txt} = this.state.note.info
        const {type} = this.state.note
        this.props.add({type,txt})
    }

    // onAdd = (ev) => {
    //     ev.preventDefault()
    //     keepService.add()
        
        
    // }

    render(){
        const {note} = this.state
        return <section className="add-note">
            <form onSubmit={this.onSubmit}>
           <input type="text" name="txt" placeholder="Take a note..." value={note.info.txt} onChange={this.handleChange} />

           <button>+</button>
           </form>
        </section>
    }

}


