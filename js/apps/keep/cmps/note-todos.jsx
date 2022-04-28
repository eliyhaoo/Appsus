

export class NoteTodos extends React.Component {
    
    state = {
        note: null
    }

    componentDidMount() { 
        this.setState({note: this.props.note})
     }
     render(){
         const { note} = this.state
         if(!note) return <React.Fragment></React.Fragment>
         const {todos,label} = note.info
         
         return <section  className="note-todos">
        <h3 className="note-title">{label}</h3>
        {todos.map((todo, idx)=> {return <div key={idx} className="todos-info">
            
            <input type="checkbox" name={todo.txt} id={todo.txt} />
            <label htmlFor={todo.txt}>{todo.txt}</label>
        </div>})}
    </section>
    }
}