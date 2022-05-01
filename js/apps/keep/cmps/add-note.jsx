import { keepService } from "../services/test"
import { eventBusService } from "../../../services/event-bus-service.js"
import { DynamicNoteAdder } from "./dynamic-note-adder.jsx"

export class AddNote extends React.Component {

    state = {
        inputType: 'note-txt'
    }

    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value

        this.setState((prevState) => ({ note: { ...prevState.note, [this.keyName]: { [field]: value } } }))
    }

    handleTypeChange = ({ target }) => {

        this.setState({ inputType: target.name })
    }
    

    render() {
        const { inputType } = this.state
      
        return <section className="add-note flex space-around">
            
            <DynamicNoteAdder add={this.props.add} keyName={this.keyName} type={inputType} handleChange={this.handleChange} />
           
            <div className="add-btns-container flex ">
            <button className="btn  txt-selector" name="note-txt" onClick={this.handleTypeChange}></button>
            <button className="btn  img-selector" name="note-img" onClick={this.handleTypeChange}></button>
            <button className="btn video-selector" name="note-video" onClick={this.handleTypeChange}></button>
            <button className="btn todos-selector" name="note-todos" onClick={this.handleTypeChange}></button>
            </div>
        </section>
    }

}


