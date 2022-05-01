import { eventBusService } from "../../../services/event-bus-service.js"
export class MailCompose extends React.Component {

    state = {
        email: {
            to: '',
            subject:'',
            body:``
        },
       
    }

    handleChange=({target})=>{
        const field = target.name
        const value = target.value
        console.log('value',value);
        this.setState((prevState)=>({email:{...prevState.email,[field]:value}}))
    }

    onSend=(ev) => {
        ev.preventDefault()
        eventBusService.emit('add',this.state.email)
    }

    onClose=()=>{
        this.props.history.push('/mail/?inbox')
    }


    render() {

        const {email} = this.state
        const { to, subject, body } = email
        return (
          
            <section className="mail-compose">
                <header className="flex space-between"><span>New Message</span><button onClick={this.onClose} >X</button></header>

                <div className="info-container">

                    <form className="form-container flex column" onSubmit={this.onSend}>

                        <input onChange={this.handleChange} type="email"  name="to" value={to} placeholder="To:" required />

                        <input onChange={this.handleChange} type="text" name="subject" value={subject} placeholder="Subject" required />


                        <div className="body-area">
                            <textarea onChange={this.handleChange} name="body"  required value={body}></textarea>
                        </div>

                        <button>Send</button>
                    </form>

                </div>
            </section>
           
        )
    }
}