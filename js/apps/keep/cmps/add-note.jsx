import { keepService } from "../services/test"
import { eventBusService } from "../../../services/event-bus-service.js"
import { DynamicNoteAdder } from "./dynamic-note-adder.jsx"

export class AddNote extends React.Component {
    
    state = {
        inputType: 'note-txt'
    }

    // state = {
    //     inputType: 'note-txt',
    //     note: {
    //         txt: {
    //             type: 'note-txt',
    //             createdAt: Date.now(),
    //             info: {
    //                 txt: ''
    //             }
    //         },
    //         img: {
    //             type: 'note-img',
    //             createdAt: Date.now(),
    //             info: {
    //                 url: '',
    //                 title: ''
    //             }
    //         },
    //         todos: {
    //             type: 'note-todos',
    //             info: {
    //                 label: "Get my stuff together",
    //                 todos: [
    //                     { txt: "Driving liscence", doneAt: null },
    //                     { txt: "Coding power", doneAt: 187111111 }
    //                 ]
    //             }
    //         },
    //         video:{
    //             type: 'note-video',
    //             info:{
    //                 url:''
    //             }
    //         }
    //     }
    // }


    get keyName(){
        const {inputType} = this.state
        if(inputType === 'note-txt') return 'txt'
        else if (inputType === 'note-img') return 'img'
        else if (inputType === 'note-todos') return 'todos'
        else if (inputType === 'note-video') return 'video'
    }

    
    handleChange = ({ target }) => {
        const field = target.name
        const value = target.value
        
        this.setState((prevState) => ({ note: {...prevState.note, [this.keyName]: { [field]: value } } }))
        
    }
    
    
    onSubmit = (ev) => {
        ev.preventDefault()
        
        
        // const { txt } = this.state.note.info
        // const { type } = this.state.note
        // this.props.add({ type, txt })
    }
    handleTypeChange = ({target}) => {
        
        this.setState({ inputType: target.name })
    }
    // onAdd = (ev) => {
        //     ev.preventDefault()
        //     keepService.add()
        
        
        // }
        
        
        render() {
            const {  inputType } = this.state
            // if(!note) return <React.Fragment></React.Fragment>  
        //  console.log('note txt from add note', note.txt.info.txt);    
        return <section className="add-note">
            {/* <form onSubmit={this.onSubmit}> */}
                <DynamicNoteAdder add={this.props.add} keyName={this.keyName}  type={inputType} handleChange={this.handleChange} />
                {/* <input type="text" name="txt" placeholder="Take a note..." value={note.info.txt} onChange={this.handleChange} /> */}
                {/* <button className="add-btn">+</button> */}
            {/* </form> */}

            <button className="on-note-txt" name="note-txt" onClick={this.handleTypeChange}>txt</button>
            <button className="on-note-txt" name="note-img" onClick={this.handleTypeChange}>img</button>
            <button className="on-note-txt" name="note-video" onClick={this.handleTypeChange}>video</button>
            <button className="on-note-txt" name="note-todos" onClick={this.handleTypeChange}>todos</button>
        </section>
    }

}


