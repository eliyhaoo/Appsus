
export class AddNoteTxt extends React.Component {


    state = {
        note: {
            info: {
                txt: '',
            }
        }
    }


    handleTxtChange = ({ target }) => {
        const value = target.value
       
        this.setState((prevState)=> ({ note: { info: {...prevState.info, txt: value } } }))
    }

   
render(){
    const { txt } = this.state.note.info

    // if(!txt) return <React.Fragment></React.Fragment>
    return <section className="add-note-txt" >
        <input type="text" placeholder="Take a note..." value={txt} onChange={this.handleTxtChange} />
        <button className="add-btn" onClick={()=>{this.props.add(this.state.note)}} >+</button>
    </section>
}
    
}