

export class NoteImg extends React.Component{

    state = {
        note: null
    }


    componentDidMount() { 
        this.setState({note: this.props.note})
     }
     render(){
         const {note} = this.state
         if(!note) return <React.Fragment></React.Fragment>
       
         const {url,title} = note.info
         const {backgroundColor} = note.style

         return <section  className="note note-img">
        {title && <h3 className="note-title">{title}</h3>}
    <section className="note-img-container">
        <img src={url}  />
    </section>
    </section>
    }

}